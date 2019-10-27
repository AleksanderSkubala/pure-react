import React, { useState } from 'react';
import './App.css';

function App() {
  const [isRed, setRed] = useState(false);

  function sayHello() {
    setRed(!isRed);
  };

  return (
    <div className="App">
      <header className="App__header">
        <h1 className={isRed ? 'red' : ''}>
          Aleksander Skubała
        </h1>
        <p>first pure React page</p>
        <button className="App__button" onClick={sayHello}>
          <span>toogle</span>
        </button>
      </header>
    </div>
  );
}

export default App;
