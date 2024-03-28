const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");

const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY);

app.use(express.json());
app.use(cors({ origin: "*" }));

app.post("/checkout", async (req, res) => {
  try {
    const { items } = req.body;

    // Create line items for the checkout session
    const lineItems = await Promise.all(
      items.map(async (item) => {
        try {
          const product = await stripe.products.create({
            name: item.name,
            type: "good", // Specify the type as 'good' for products
          });

          const price = await stripe.prices.create({
            currency: "inr",
            unit_amount: item.price * 100, // Convert to cents
            product: product.id,
          });

          return {
            price: price.id,
            quantity: item.quantity || 1, // Set default quantity to 1 if not provided
          };
        } catch (error) {
          console.error("Error creating product or price:", error);
          throw new Error("Failed to create product or price");
        }
      })
    );

    // Create a new checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: "http://localhost:5174/success",
      cancel_url: "http://localhost:5174/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error during checkout:", error);
    res.status(500).json({
      error: "Failed to initiate checkout",
      details: error.message,
    });
  }
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
