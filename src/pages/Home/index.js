import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to WhizCard Homepage</h1>
      <div className="flashcard">
        <h2 className="title">WhizCard</h2>
      </div>
      <div className="description">
        <p>Flashcards are a great way to study and promote active recall in the brain.</p>
        <p>Take a look at some cards created by others!</p>
        <p>Or try creating your own!</p>
        <div className="btnsContainer">
          <Link to="/Sets">
            <button>View Sets</button>
          </Link>
          <Link to="/Create">
            <button>Create a Set</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
  
export default Home;