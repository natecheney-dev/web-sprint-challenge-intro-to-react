import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import { BASE_URL } from './constants'
import styled, {keyframes} from 'styled-components';
import Name from './components/Name'

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`
const StyledHeader = styled.div`
  display:flex;
  justify-content:center;
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  font-size: 7rem;
  background: rgba(0,0,0,.3);
`
const StyledMain = styled.div`
margin-top:1%;
`




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

      })
      .catch(err => console.error(err));
      return () => {
        console.log("Cleaning up the event listener!")
      }
  }, [])

  
  
  
 
  
  return (
    <div className="App">
      <StyledHeader>
        <h1 className="Title">Characters</h1>
      </StyledHeader>
      <StyledMain>
        {
          peopleData.map((pInfo, idx) => {
            return(
            <Name name={pInfo.name} index={idx} peopleData={peopleData}/>)
          })
        }
        {/* {
          (currentNameId) && <Character charId={currentNameId} close={closeInfo} peopleData={peopleData}/>
        } */}
      </StyledMain>
    </div>
  );
}

export default App;
