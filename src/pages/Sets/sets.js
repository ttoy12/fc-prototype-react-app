import React from "react";
import './sets.css';
import axios from 'axios';
  
const Sets = () => {
  const data = () =>{
    axios.get('/http://localhost:9000/get-data')
  .then(res => console.log(res.data))
  .catch(err => console.error(err))
  }
  return (
    <div>
      <h1>
        Flashcard is a studying tool.
      </h1>
      <p>In progress...</p>
      <button onClick={data}> log data</button>
    </div>
  );
};
  
export default Sets;