import React,{useState,useEffect} from "react";
import './sets.css';
import axios from 'axios';

  
const Sets = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("trying to get the data...")
    
  }, []);
  return (
    <div>
      <h1>
        Flashcard is a studying tool.
      </h1>
      <p>In progress...</p>
      <button onClick={()=>{axios.get('http://localhost:9000/findData')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      });}}>
        {data.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </button>
    </div>
  );
};
  
export default Sets;