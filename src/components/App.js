
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
      <input
          type="text"
          value={greet}
          onChange={handleNameChange}
          onBlur={handleBlur}
        />
       {greet!=""? <p>Hello {greet}!</p> :<p></p>}
    </div>
  );
};

export default App
