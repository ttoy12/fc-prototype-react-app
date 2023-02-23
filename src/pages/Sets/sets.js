import React from "react";
import './sets.css';
import { Link } from 'react-router-dom';

const Sets = () => {
  return (
    <div>
      <h1>
        Flashcard is a studying tool.
      </h1>
      <p>In progress...</p>
      <div className="main">
        <div id="sets" className="set-containers">
          <Link className="link" to="/"> {/*'need to change link and data attributes once i figure out how to'*/}
            <div className="set">
              <div className="about">
                <span className="num-cards">24 cards</span>
                <span className="separator"></span>
                <span className="user">WhizArd</span>
              </div>
              <div className="set-name">My first cards</div>
            </div>
          </Link>
      
        </div>
      </div>
    </div>
  );
};
  
export default Sets;