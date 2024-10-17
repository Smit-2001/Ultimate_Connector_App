import React, { useState } from 'react';
import MessageInput from './MessageInput';
import { sendMessage } from '../services/api';

function ChatWindow() {
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    const userMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const aiResponse = await sendMessage(text);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: aiResponse },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'system', content: 'Error connecting to AI.' },
      ]);
    }
  };

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.role}`}>
          {msg.content}
        </div>
      ))}
      <MessageInput onSend={handleSend} />
    </div>
  );
}

export default ChatWindow;
