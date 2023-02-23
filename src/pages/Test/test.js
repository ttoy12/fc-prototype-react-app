import React from "react";
import './test.css';
import { Link } from 'react-router-dom';


var addSet = ()=>
{
  console.log("addSet being called");
  var ok = true;
  if (ok === true) {
    var mySet = document.getElementById("sets");
    var newCard = document.createElement("newDiv");
    newCard.className = 'set';
    mySet.appendChild(newCard);
  }
}

const Test = () => {
  return (
    <div>
      <h1>
        Testing...
      </h1>
      <p>In progress...</p>
      <div className="main">
        <div className="set-containers">
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
          <button onClick={addSet} className="plusBtn" >+ Add Card</button>{/*need to create onClick func that creates new set when button clicked */}
          <button onClick={console.log("clicked")} className="plusBtn">Test</button>
        </div>
      </div>
    </div>
  );
};

export default Test;