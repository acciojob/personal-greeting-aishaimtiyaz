
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

 const [greet, setGreet] = useState('');

  const handleNameChange = (event) => {
    setGreet(event.target.value);
  };

  const handleBlur = () => {
    setGreet("");
  };
  return (
<div>
      <p>Enter your name:</p>
      <input
          type="text"
          value={greet}
          onChange={handleNameChange}
          onBlur={handleBlur}
        />
       {greet!=""? <p>Hello {greet}!</p> : ""}
    </div>
  );
};

export default App
