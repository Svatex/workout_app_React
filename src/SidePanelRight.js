import React from "react";
import SingleExcercise from "./SingleExcercise";

function SidePanel() {
  return (
    <div className="excercise-container">
      <div>
        <h2>Select your excercise</h2>
        <SingleExcercise excerciseName="Abcd" />
      </div>
    </div>
  );
}

export default SidePanel;
