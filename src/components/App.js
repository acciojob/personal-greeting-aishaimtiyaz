
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

 const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBlur = () => {
    setGreeting(`Hello, ${name}!`);
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
