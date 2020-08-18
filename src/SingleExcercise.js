import React from 'react';



function singleExcercise (props) {
 return (
    <div className="excercise">
          <h1>{props.excerciseName}</h1>
          <h1>{props.description}</h1>
    </div>
 )
}

export default singleExcercise