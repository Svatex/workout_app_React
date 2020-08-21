import React, { useState, useEffect } from "react";

function SingleExcercise() {
  const [ExcData, setExcData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((Response) => Response.json())
      .then((Data) => {
        setExcData(Data);
      });
  }, []);

  console.log(ExcData);

  return (
    <div className="excercise">
      <h1>{ExcData.userID}</h1>
      <h1>{ExcData.body}</h1>
    </div>
  );
}

export default SingleExcercise;
