import React, { useState, useEffect } from "react";
import BodyMap from "./BodyMap";
import SingleExcercise from "./SingleExcercise";

function App() {
  //const [ExcData, setExcData] = useState([]);

 

  return (
    <div className="App">
      <BodyMap />
      <div className="excercise-container">
        <div>
          <h2>Select your excercise</h2>
          <SingleExcercise />
        </div>
      </div>
    </div>
  );
}

export default App;
