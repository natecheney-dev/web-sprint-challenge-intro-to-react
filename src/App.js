import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import { BASE_URL } from './constants'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [peopleData, setPeopleData] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL)
      .then(res => {
        setPeopleData(res.data);
        console.log(peopleData);
      })
      .catch(err => console.error(err));
      return () => {
        console.log("Cleaning up the event listener!")
      }


  }, [])
  
  return (
    <div className="App">
      <div className="Header">
        <h1 className="Title">Characters</h1>
      </div>
      <div className="Main">

      </div>
    </div>
  );
}

export default App;
