
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

 const [name, setName] = useState('');
 const [greeting, setGreeting] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    setGreeting(`Hello ${event.target.value} !`);
  };

  const handleBlur = () => {
    setGreeting("");
    setName("");
  };
  return (
<div>
      <p>Enter your name:</p>
      <input
          type="text"
          value={name}
          onChange={handleNameChange}
          onBlur={handleBlur}
        />
      <p>{greeting}</p>
    </div>
  );
};

export default App
