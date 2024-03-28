import React, { useEffect } from "react";

const WebSocketComponent = () => {
  useEffect(() => {
    // Establish WebSocket connection when the component mounts
    const socket = new WebSocket("ws://localhost:3000/ws");

    // WebSocket event listeners
    socket.onopen = () => {
      console.log("WebSocket connection established.");
    };

    socket.onmessage = (event) => {
      console.log("Message received:", event.data);
      // Handle incoming messages from the WebSocket server
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
      // Handle WebSocket errors
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed.");
      // Handle WebSocket connection closure
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h1>WebSocket Component</h1>
      {/* Additional component content */}
    </div>
  );
};

export default WebSocketComponent;
