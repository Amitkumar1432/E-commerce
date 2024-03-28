import React from "react";
import { DataContext } from "../Context";
// import { Link } from "react-router-dom";
import "../css/Details.css";
import "../css/Cart.css";

const Cart = () => {
  const { cart, increase, reduction, removeProduct, total } =
    React.useContext(DataContext);

  const checkout = async () => {
    try {
      const orderDetails = cart.map((item) => ({
        id: item._id,
        name: item.name, // Use the correct property name for the item's name
        // image: item.image,
        price: item.price,
        description: item.description,
        count: item.count,
      }));

      const requestBody = JSON.stringify({ items: orderDetails });

      const response = await fetch("http://localhost:8001/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: requestBody,
      });

      if (!response.ok) {
        throw new Error(
          `Failed to initiate checkout. Status: ${response.status}`
        );
      }

      const data = await response.json();
      window.location = data.url;
    } catch (error) {
      console.error("Error during checkout:", error);
      // Handle error gracefully, e.g., display a message to the user
    }
  };

  return (
    <>
      {cart.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>No products in cart</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div className="details cart" key={item._id}>
              <img src={item.image} alt="" />
              <div className="box">
                <div className="row">
                  <h2>{item.name}</h2>
                  <span>Total: ${item.price * item.count}</span>
                </div>
                <p>{item.description}</p>
                {/* Assuming Colors is a property of item */}
                <p>{item.colors}</p>
                <div className="amount">
                  <button className="count" onClick={() => reduction(item._id)}>
                    <span>-</span>
                  </button>
                  <span>{item.count}</span>
                  <button className="count" onClick={() => increase(item._id)}>
                    <span>+</span>
                  </button>
                </div>
              </div>
              <div className="delete" onClick={() => removeProduct(item._id)}>
                X
              </div>
            </div>
          ))}
          <div className="total">
            <button onClick={checkout}>CheckOut</button>
            <h3>Sub Total: ${total}</h3>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
