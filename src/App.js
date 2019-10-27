import React from 'react';
import './App.css';

function App() {
  function sayHello() {
    alert('HELLO!');
  };

  return (
    <div className="App">
      <header className="App__header">
        <h1>
          Aleksander Skubała
        </h1>
        <p>first pure React page</p>
        <button className="App__button" onClick={sayHello}>
          <span>Hello</span>
        </button>
      </header>
    </div>
  );
}

export default App;
