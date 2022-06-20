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
    margin: 0 0 0 10px;
    display: flex;
    padding: 10px 0; 
    border-top: 1px solid #111;
    align-items: center; 
    font-size: 15px;
    background-color: ${props => props.quantidade < 500 ? 'rgba(158, 57, 57, 0.2)' : ''};
    grid: 80px 80px 110px 80px 100px;

`

const Field = styled.li`
    min-width: 80px;
    margin: 0 15px 0 0;
    list-style: none;
    display: flex; 
    align-items: center; 
    font-weight: 300;


    /* @media screen and (min-width: 2210px){ */
        width: 200px;
        min-width: 200px;
        max-width: 200px;
    /* } */

    @media screen and (max-width: 2210px){
        width: 170px;
        min-width: 170px;
        max-width: 170px;
    }

    @media screen and (max-width: 1940px){
        width: 150px;
        min-width: 150px;
        max-width: 150px;
    }

    @media screen and (max-width: 1750px){
        width: 120px;
        min-width: 120px;
        max-width: 120px;
    }

    @media screen and (max-width: 1500px){
        width: 100px;
        min-width: 100px;
        max-width: 100px;
    }

    @media screen and (max-width: 1300px){
        width: 80px;
        min-width: 80px;
        max-width: 80px;
    }

    @media screen and (max-width: 1124px){
        width: 60px;
        min-width: 60px;
        max-width: 60px;
    }
`