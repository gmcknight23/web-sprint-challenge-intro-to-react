import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    axios("https://swapi.dev/api/people").then((res) => {
      console.log(res.data);
      setCharacters(res.data);
    });
  }, []);
  return (
    <div className="App">
      <h1 className="Header">STAR WARS Characters</h1>
      {characters.map((ch) => {
        return (
          <div className="accordian">
            <div className="header-div">
              <h1>{ch.name}</h1>
            </div>
            <div className="arrow-container">
              <div className="arrow">▽</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
