
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

 const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    setGreeting(`Hello, ${event.target.value}!`);
  };

  const handleBlur = () => {
    setGreeting("");
    setName("");
  };
  return (
<div>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          onBlur={handleBlur}
        />
      </label>
      <div>{greeting}</div>
    </div>
  );
};

export default App
