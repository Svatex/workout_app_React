import React, { useState, useEffect } from "react";
import BodyMap from "./BodyMap";
import SingleExcercise from './SingleExcercise'

function App() {
  const [ExcData, setExcData] = useState([]);

  useEffect(() => { fetch ("https://swapi.dev/api/people/")
      .then (Response => Response.json())
      .then (Data => {setExcData(Data.results)})
  }, [])

  console.log(ExcData[0])

  return (
    <div className="App">
      <BodyMap />
      <div className="excercise-container">
      <div>
        <h2>Select your excercise</h2>
        <SingleExcercise excerciseName='{ExcData[0].name}' />
      </div>
    </div>
    
      
    </div>
  );
}

export default App;
