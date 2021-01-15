import React, { useState } from 'react';
import './app.css';

const App = () => {
  let [bgColor, setBgColor] = useState("white");

  const handleChange = (i) => {
    bgColor = i.target.value;
    setBgColor(bgColor);
   };

  return ( 
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" id="myDiv" style={{ backgroundColor: bgColor }}>
      <main className="px-3">
        <div className="card" style={{ width: "23rem", margin: "17rem auto" }}>
         <div className="card-body">
           <h2 className="card-title">{bgColor}</h2>
            <p className="card-text" style={{marginBottom: "0"}}>Change the background color here :)</p>
            <p className="card-text">(color-name, rgba-code, anything)</p>
           <input onChange={handleChange} type="text" />
         </div>
       </div>
      </main>
    </div>
   );
}
 
export default App;