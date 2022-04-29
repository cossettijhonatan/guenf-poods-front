import Axios from "axios";
import styled from "styled-components";
import React from 'react';
import { Link } from "react-router-dom";

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

const Instituicao = (props) => {
    // const url = `http://localhost:3000/instituicaos/${props.id}`
    // const handlerDelete = () => {
    //     Axios.delete(url)
    //         .then((response) => {

    //             console.log(response)
    //         })
    //         .catch((e) => {
    //             console.error(e);
    //         })
    // }
    return (
        <Wrapper>
            <Field> {props.nome} </Field>
            <Field> {props.cnpj} </Field>
            <Field> {props.email} </Field>
            <Field> {props.endereco} </Field>
            {/* <Button onClick={handlerDelete()}> delete </Button> */}
        </Wrapper>
    )
}

export default Instituicao;

const Wrapper = styled.div`
    height: 40px; 
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr; 
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