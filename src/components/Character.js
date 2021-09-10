import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';

const StyledPeople = styled.div`
    width:15%;
    

    p{
        border:1px solid white;
        background: rgba(0,0,0,.3);
    }
`
const StyledCharacter = styled.div`
    margin-top:1%;
    display:flex;
`


const LoremIpsum = styled.div`
    width:85%;
    background: rgba(0,0,0,.3);
    margin:.1%;
    border:1px solid white;

    
`


// Write your Character component here
export default function Character(props) {

    const {peopleData} = props


    
    
    
    return (
        <StyledCharacter>
            <StyledPeople>
                <p>Birth Year: {peopleData.birth_year}</p>
                <p>Eye Color: {peopleData.eye_color}</p>
                <p>Gender: {peopleData.gender}</p>
                <p>Hair Color: {peopleData.hair_color}</p>
                <p>Height: {peopleData.height}</p>
                <p>Mass: {peopleData.mass}</p>
                <p>Skin Color: {peopleData.skin_color}</p>
            </StyledPeople>
                <LoremIpsum>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas volutpat. Aliquam sem et tortor consequat id porta nibh venenatis. Ac tincidunt vitae semper quis. Justo eget magna fermentum iaculis eu. Purus sit amet volutpat consequat mauris nunc congue nisi. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Gravida dictum fusce ut Vulputate odio ut enim blandit volutpat maecenas volutpat. Aliquam sem et tortor consequat id porta nibh venenatis. Ac tincidunt vitae semper quis. Justo eget magna fermentum iaculis eu. Purus sit amet volutpat consequat mauris nunc congue nisi. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.Justo eget magna fermentum iaculis eu. Purus sit amet volutpat consequat mauris nunc congue nisi. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim.   </p>
                </LoremIpsum>
        </StyledCharacter>
    )
  }