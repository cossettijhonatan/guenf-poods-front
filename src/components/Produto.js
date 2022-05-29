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
    console.log("insideee", props)
    return (
        <Wrapper quantidade={props.quantidade}>
            <Field> {props.id} </Field>
            <Field> {props.nome} </Field>
            <Field> {props.quantidade} </Field>
            <Field> {props.preco.toFixed(2)} </Field>
            <Button onClick={() => { props.setEdit(props.id) }}> Editar </Button>
        </Wrapper>
    )
}

export default Produto;

const Wrapper = styled.div`
    height: 40px; 
    display: flex;
    padding: 10px 0; 
    border-top: 1px solid #111;
    align-items: center; 
    font-size: 15px;
    background-color: ${props => props.quantidade < 500 ? 'rgba(158, 57, 57, 0.2)' : ''};

`

const Field = styled.li`
    margin: 0 0 0 10px;
    width: 150px; 
    list-style: none;
    display: flex; 
    align-items: center; 
    font-weight: 300;
`