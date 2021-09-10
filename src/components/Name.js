import Character from './Character'
import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';


const StyledMain = styled.div`
    margin-left:10%;
    margin-right:10%;
    margin-top:.5%;
    margin-bottom: .5%;
`
const StyledMainName = styled.div`
    display:flex;
`
const StyledPeopleName = styled.div`
    width:70%;
    display:flex;
    justify-content:center;
    margin:.1%;

    h2{
        border:1px solid white;
        background: rgba(0,0,0,.75);
        color:whitesmoke;
        width:45%;
    }
`
const DetailsButton = styled.div`
    
    margin:.1%;
    width:15%;
    display:flex;
    justify-content:center;

    button{
        border:1px solid white;
        background: rgba(0,0,0,.75);
        color:whitesmoke;
        width:45%;

        &:hover{
            background: rgba(255,255,255,0);
            color:rgba(0,0,0,.75)
        }
    }

    
`
const StyledText =styled.div`
    display:flex;   
`
const MainDetails = styled.div`

    margin:.1%;
    background: rgba(0,0,0,.3);
`



export default function Name(props) {
    const {peopleData} = props;
    const [openState, setOpenState] = useState(null);
    const [details, setDetails] = useState(null);

    const openDetails = () =>{
        setOpenState(!openState);
    }
    
    

    useEffect(() => {
        setDetails(peopleData[props.index])
    },[props.index])


    console.log(details);

    return (
    <StyledMain>
      <StyledMainName>
      <DetailsButton>
            <button onClick={openDetails}>
                Details
            </button>
        </DetailsButton>
        <StyledPeopleName>
            <h2>{props.name}</h2>
        </StyledPeopleName>

        
        </StyledMainName>
        <StyledText>
        <MainDetails>
            {
            openState && <Character charId={props.index} peopleData={details}/>
            }
        </MainDetails>
        </StyledText>
      </StyledMain>
    )
  }

//   Character charId={currentNameId} close={closeInfo} peopleData={peopleData}

// {
//     (currentNameId) && peopleData.map(item =>{
//       return(<Character charId={currentNameId - 1} close={closeInfo} birth={item.birth_year} eye={item.eye_color} gender={item.gender} hair={item.hair_color} height = {item.height} mass = {item.mass} skin = {item.skin_color}/>)
//     }) 
//   }