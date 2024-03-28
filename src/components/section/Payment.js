import React, { Component, useEffect } from "react";
import Products from "./Products";

export class Payment extends Component {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Thank You </h2>
      </div>
    );
  }
}

// const payment = () => {
//   <button onClick={() => handleRemove(Products._id)}>Remove</button>;
// };

export default Payment;

// How to connect ReactJS with MetaMask ?

// https://jsonplaceholder.typicode.com/todos/1

// useEffect(() => {
//   setTimeout(() => {
//     setCount((count) => count + 1);
//   }, 1000);
// });
