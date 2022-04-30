
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
    console.log('props', props)
    let data = props.data.split("-");
    data = data[2] + "/" + data[1] + "/" + data[0]
    return (
        <Wrapper>
            <Field> {props.id} </Field>
            <Field> {props.nome} </Field>
            <Field> {data} </Field>
            <Field> {props.valor.toFixed(2)} </Field>
            <Field> {props.status} </Field>
            <Button> DOWNLOAD</Button>
        </Wrapper>
    )
}

export default Produto;

const Wrapper = styled.div`
    height: 40px; 
    display: grid; 
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr; 
    padding: 10px 0; 
    border-top: 1px solid #111;

    align-items: center; 
    font-size: 15px;

`

const Field = styled.li`
    width: 250px; 
    list-style: none;
    display: flex; 
    align-items: center; 
    font-weight: 300;
`