import React from 'react';
import styled from 'styled-components'

const ButtonStyle = styled.button`
background-color: #6B0F1A;
color: #FFF; 
border: none;
border-radius: 4px; 
padding: 10px 20px; 
text-transform: uppercase;
font-family: 'Montserrat', sans-serif;
cursor: pointer; 
`

const Button = (props) => {
    return (
        <ButtonStyle> {props.text}</ButtonStyle>
    );
}

export default Button; 