import React, { useState } from 'react';

const App = () => {
  let [bgColor, setBgColor] = useState("white");

  const handleChange = (i) => {
    bgColor = i.target.value;
    setBgColor(bgColor);
   };

  return ( 
    <div className="mx-auto" style={{ backgroundColor: bgColor, width: "100%" }}>
      <div className="card" style={{ width: "23rem" }}>
        <div className="card-body">
          <h2 className="card-title">{bgColor}</h2>
          <p className="card-text">Change the background color here :)</p>
          <input onChange={handleChange} type="text" />
        </div>
      </div>
      </div>
   );
}
 
export default App;