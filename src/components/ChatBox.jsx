import React, { useState, useEffect } from "react";
import { sendMessage, receiveMessages } from "../services/socket";
import Message from "./Message";

const ChatBox = ({ messages }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    receiveMessages((message) => {
      console.log("Received message:", message);
    });
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      console.log("Sending message:", input);
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} content={msg.content} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          className="message-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="send-button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
