
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

 const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBlur = () => {
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
       <p>Hello {name}!</p>
    </div>
  );
};

export default App
