import axios from "axios";
import styled from "styled-components";
import React, { useEffect, useState } from 'react';
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

    const deleteHandler = () => {
        props.setToDelete(props.id)
        props.switchModal(true)
    }
    const editHanlder = () => {
        props.setEdit(props.id)
    }
    return (
        <>
            <Wrapper color={props.index}>
                <Field> {props.nome} </Field>
                <Field> {props.cnpj} </Field>
                <Field> {props.email} </Field>
                <Field> {props.endereco}, {props.numero}, {props.bairro}. {props.cep} - {props.cidade}/{props.uf} </Field>
                <ButtonArea>
                    <Button onClick={deleteHandler}> Deletar </Button>
                    <Button onClick={editHanlder}><StyledLink to={"/editar-empresa"}> Editar</StyledLink> </Button>
                </ButtonArea>
            </Wrapper>
        </>
    )
}

export default Instituicao;

const Wrapper = styled.div`
    height: 40px; 
    display: flex; 
    justify-content: space-between;
    padding: 10px;
    align-items: center; 
    font-size: 15px;
    background-color: ${props => props.color % 2 == 0 ? 'none' : '#c4c4c433'};
    background-size: cover;

`

const Field = styled.li`
    min-width: 250px; 
    width: 250px;
    list-style: none;
    display: flex; 
    align-items: center; 
    font-weight: 300;
`
const ButtonArea = styled.li`
min-width: 250px; 
width: 250px;
list-style: none;
display: flex; 
justify-content: space-between;
align-items: center; 
font-weight: 300;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        color: #6B0F1A; 
    }
`;