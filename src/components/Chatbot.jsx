// src/Chatbot.js
import React, { useState } from 'react';
import fetchChatResponse from '/src/api';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = input.trim();
    if (!userMessage) return;

    const newMessages = [...messages, { sender: 'user', text: userMessage }];
    setMessages(newMessages);
    setInput('');

    const botResponse = await fetchChatResponse(userMessage);
    setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            <strong>{msg.sender === 'user' ? 'Shams' : 'GPT-Bot'}: </strong>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send Query</button>
      </form>
    </div>
  );
};

export default Chatbot;
