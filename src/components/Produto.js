import Axios from "axios";
import styled from "styled-components";
import React from 'react';

const Button = styled.button`
background-color: #6B0F1A;
color: #FFF; 
border: none;
border-radius: 4px; 
padding: 10px 20px; 
text-transform: uppercase;
font-family: 'Montserrat', sans-serif;
cursor: pointer; 
`

const Produto = (props) => {
    console.log(props.preco.toFixed(2))
    return (
        <Wrapper quantidade={props.quantidade}>
            <Field> {props.id} </Field>
            <Field> {props.nome} </Field>
            <Field> {props.quantidade} </Field>
            <Field> {props.preco.toFixed(2)} </Field>
        </Wrapper>
    )
}

export default Produto;

const Wrapper = styled.div`
    height: 40px; 
    display: grid; 
    grid-template-columns: 130px 170px 190px 100px;  
    padding: 10px 0; 
    border-top: 1px solid #111;
    align-items: center; 
    font-size: 15px;
    background-color: ${props => props.quantidade < 500 ? 'rgba(158, 57, 57, 0.2)' : ''};

`

const Field = styled.li`
    width: 250px; 
    list-style: none;
    display: flex; 
    align-items: center; 
    font-weight: 300;
`