import React, { useState } from 'react';
import './App.css';

const App = () => {
  let [bgColor, setBgColor] = useState("");
  let [currentBgColor, setCurrentBgColor] = useState("");

  const handleChange = (i) => {
    bgColor = i.target.value;
    setBgColor(bgColor);
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    setCurrentBgColor(bgColor);
  };

  return ( 
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" id="myDiv" style={{ backgroundColor: currentBgColor }}>
      <main className="px-3">
        <div className="card" style={{ backgroundColor: "rgba(0,0,0,0.17)", width: "23rem", margin: "17rem auto" }}>
         <div className="card-body">
           <h2 className="card-title">{currentBgColor}</h2>
            <p className="card-text" style={{ marginBottom: "0.2rem" }}>Change the background color here :)</p>
            <form onSubmit={handleSubmit}>
              <input placeholder="Enter your color" onChange={handleChange} type="text" value={bgColor} />
              <button className="btn btn-primary btn-sm" type="submit" style={{marginTop: "0.5rem", display: "block"}}>Change Color</button>
            </form>
         </div>
       </div>
      </main>
    </div>
   );
}
 
export default App;