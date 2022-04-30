import styled from "styled-components";

export const BG = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top, 
    white 0%,
    white 50%,
    #6B0F1A 50%, 
    #6B0F1A 100%);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
font-weight: 800; 
font-size: 20px;
`;

export const Container = styled.div`
  width: 400px;
  height: 300px;
  padding: 30px;
  border: 0.5px solid rgba(0, 0, 0, 0.25) ; 
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: initial;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Input = styled.input` 
border: 1px solid rgba(0, 0, 0, 0.5);
font-size: 13px; 
padding: 10px;
border-radius: 3px;
width: 95%; 
margin: 0 10px 10px 0;

&:focus {
    outline: none;
    box-shadow: 0px 0px 2px #000;
}
`;


export const Button = styled.button`
    background-color: #000;
    color: #FFF; 
    border: none;
    border-radius: 4px; 
    padding: 10px 20px; 
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer; 
    font-size: 13px;
    display: flex;
    align-items: center;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`