import React, { useState } from 'react';

const App = () => {
  let [bgColor, setBgColor] = useState("white");

  const handleChange = (i) => {
    bgColor = i.target.value;
    setBgColor(bgColor);
   };

  return ( 
    <>
      <div style={{ backgroundColor: bgColor }}>
        <input onChange={handleChange} type="text" />
      </div>
    </>
   );
}
 
export default App;