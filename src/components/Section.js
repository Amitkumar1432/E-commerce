import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./section/Products";
import Details from "./section/Details";
import Cart from "./section/Cart";
import Payment from "./section/Payment";
import Checkout from "./section/Checkout";
import SearchBar from "./section/SearchBar";
import Footer from "./section/Footer";
import About from "./section/About";
import Colors from "./section/Colors";
import WebSocketComponent from "./section/WebSocketComponent";
import Contact from "./section/Contact";
import Signup from "./section/Signup";
import Login from "./section/Login";

export class Section extends Component {
  render() {
    return (
      <section>
        <Routes>
          <Route path="/" element={<Products />} exact />
          <Route path="/product" element={<Products />} exact />
          <Route path="/product/:id" element={<Details />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/payment" element={<Payment />} exact />
          <Route path="/checkout" element={<Checkout />} exact />
          <Route path="/search" element={<SearchBar />} exact />
          <Route path="/Footer" element={<Footer />} exact />
          <Route path="/About" element={<About />} exact />
          <Route path="/Colors" element={<Colors />} exact />
          <Route
            path="/WebSocketComponent"
            element={<WebSocketComponent />}
            exact
          />
          <Route path="/Contact" element={<Contact />} exact />{" "}
          <Route path="/Signup" element={<Signup />} exact />{" "}
          <Route path="/Login" element={<Login />} exact />{" "}
        </Routes>
      </section>
    );
  }
}

export default Section;
