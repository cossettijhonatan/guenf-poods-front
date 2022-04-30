import React, { useState, useEffect } from "react";
// import validator from 'validator' 
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Button from "./Button";
import Axios from "axios";
import { IdContainer, EndContainer, Title, Label, Input, InnerContainer, ButtonContainer } from './Style'

const ProdutoForm = () => {
    let textButton = 'Cadastrar'
    const url = "http://localhost:3000/produtos"
    const navigate = useNavigate();
    const [sentData, setSentData] = useState(false);
    const [data, setData] = useState({
        nome: "",
        quantidade: "",
        preco: ""
    })


    function submit(s) {
        console.log('submit', s)
        s.preventDefault();
        Axios.post(url, {
            nome: data.nome,
            quantidade: data.quantidade,
            preco: data.preco
        })
            .then(() => {
                setSentData(true);

            })
        // navigate('/produtos')
    }

    function handle(d) {
        const newData = { ...data };
        newData[d.target.id] = d.target.value;
        setData(newData);
    }


    return (
        <FormContainer onSubmit={(s) => submit(s)}>
            <Wrapper>
                <ContentContainer>
                    <Item>
                        <Label htmlFor="nome">Nome: </Label>
                        <Input onChange={(d) => handle(d)} value={data.nome} type="text" name="nome" id="nome" required />
                    </Item>
                    <Item>
                        <Label htmlFor="quantidade">Quantidade: </Label>
                        <Input onChange={(d) => handle(d)} value={data.quantidade} type="number" name="quantidade" id="quantidade" required />
                    </Item>
                    <Item>
                        <Label htmlFor="preco">Preço: </Label>
                        <Input onChange={(d) => handle(d)} value={data.preco} type="number" name="preco" id="preco" required />
                    </Item>
                </ContentContainer>
            </Wrapper>
            <ButtonContainer>
                <Button type="submit" text={textButton} />
            </ButtonContainer>
        </FormContainer>
    );
};

export default ProdutoForm;


const ContentContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    width: 75%;

`

const Item = styled.div`
    display: flex; 
    flex-direction: column;
    width: 70%;
`

const Wrapper = styled.div`
    display: flex; 
    justify-content: center; 
`


const FormContainer = styled.form`
    width: 100%;
    height: 300px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-between;

`