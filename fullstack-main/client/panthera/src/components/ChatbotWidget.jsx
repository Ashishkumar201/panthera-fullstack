import React from 'react';

const ChatbotWidget = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '250px',
      height: '100px',
      backgroundColor: '#f1f1f1',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '10px',
      zIndex: 1000
    }}>
      <strong>Chatbot (Static)</strong>
      <p>I'm just a placeholder!</p>
    </div>
  );
};

export default ChatbotWidget;
