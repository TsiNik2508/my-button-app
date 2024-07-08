import React, { useState } from 'react';
import './App.css';

const generateRandomStyle = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const randomGradient = `linear-gradient(45deg, ${randomColor}, #${Math.floor(Math.random() * 16777215).toString(16)})`;
  const randomPadding = `${Math.floor(Math.random() * 20) + 10}px ${Math.floor(Math.random() * 30) + 20}px`;
  const randomFontSize = `${Math.floor(Math.random() * 20) + 14}px`;
  const randomBorderRadius = `${Math.floor(Math.random() * 50)}px`;
  const randomBoxShadow = `0px 0px ${Math.floor(Math.random() * 20) + 5}px rgba(0, 0, 0, 0.5)`;

  return {
    background: randomGradient,
    padding: randomPadding,
    fontSize: randomFontSize,
    border: 'none',
    borderRadius: randomBorderRadius,
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: randomBoxShadow,
  };
};

function App() {
  const [buttonStyle, setButtonStyle] = useState(generateRandomStyle());

  const handleClick = () => {
    setButtonStyle(generateRandomStyle());
  };

  return (
    <div className="App">
      <header className="App-header">
        <button style={buttonStyle} onClick={handleClick}>
          Кнопка
        </button>
      </header>
    </div>
  );
}

export default App;
