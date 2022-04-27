import React, { useState } from "react";
// import validator from 'validator' 
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button";
import Axios from "axios";
import { FormContainer, IdContainer, EndContainer, Title, Label, Input, InnerContainer, Item, ContentContainer, ButtonContainer } from './Style'

const Form = () => {
    let textButton = 'Cadastrar'
    const url = "http://localhost:3000/instituicaos"
    const navigate = useNavigate();
    const [data, setData] = useState({
        nomeFantasia: "",
        razaoSocial: "",
        endereco: "",
        mail: "",
        cnpj: "",
        telefone: "",
    })

    const [address, setAddress] = useState({
        endereco: "",
        numero: "",
        bairro: "",
        cep: "",
        cidade: "",
        uf: "",
        complemento: ""
    })

    function submit(s) {
        s.preventDefault();
        const endereco = transformAddress();
        Axios.post(url, {
            nomeFantasia: data.nomeFantasia,
            razaoSocial: data.razaoSocial,
            endereco: endereco,
            mail: data.mail,
            cnpj: data.cnpj,
            telefone: data.telefone
        })
            .then(res => {
                console.log(res.data)
            })
        navigate('/cadastros')
    }

    function handle(d) {
        const newData = { ...data };
        newData[d.target.id] = d.target.value;
        setData(newData);

    }

    function handleAddress(a) {
        const newAddress = { ...address };
        newAddress[a.target.id] = a.target.value;
        setAddress(newAddress);
    }

    const transformAddress = () => {
        return (`${address.endereco}, ${address.numero}, ${address.bairro}, ${address.complemento}. ${address.cep} - ${address.cidade}/${address.uf}`);
    }

    return (
        <FormContainer onSubmit={(s) => submit(s)}>
            <ContentContainer>
                <IdContainer>
                    <Title> Dados de Identificação </Title>
                    <Label for="cnpj"> CNPJ </Label>
                    <Input onChange={(d) => handle(d)} value={data.cnpj} type="text" id="cnpj" name="cnpj" placeholder="XX. XXX. XXX/0001-XX." required />
                    <Label for="razaoSocial"> Razão Social </Label>
                    <Input onChange={(d) => handle(d)} value={data.razaoSocial} type="text" id="razaoSocial" name="razaoSocial" required />
                    <Label for="nomeFantasia"> Nome Fantasia </Label>
                    <Input onChange={(d) => handle(d)} value={data.nomeFantasia} type="text" id="nomeFantasia" name="nomeFantasia" required />
                    <Label for="telefone"> Telefone </Label>
                    <Input onChange={(d) => handle(d)} value={data.telefone} type="tel" id="telefone" name="telefone" required />
                    <Label for="mail"> Email </Label>
                    <Input onChange={(d) => handle(d)} value={data.mail} type="mail" id="mail" name="mail" required />
                </IdContainer>
                <EndContainer>
                    <Title>Dados de Endereço</Title>
                    <Label for="endereco"> Endereço </Label>
                    <Input onChange={(a) => handleAddress(a)} value={address.endereco} type="text" id="endereco" name="endereco" required />
                    <InnerContainer>
                        <Item>
                            <Label for="cidade"> Cidade </Label>
                            <Input onChange={(a) => handleAddress(a)} value={address.cidade} type="text" id="cidade" name="cidade" required />
                        </Item>
                        <Item>
                            <Label for="bairro"> Bairro </Label>
                            <Input onChange={(a) => handleAddress(a)} value={address.bairro} type="text" id="bairro" name="bairro" required />
                        </Item>
                    </InnerContainer>
                    <InnerContainer>
                        <Item>
                            <Label for="cep"> CEP </Label>
                            <Input onChange={(a) => handleAddress(a)} value={address.cep} type="number" id="cep" name="cep" required />
                        </Item>
                        <Item>
                            <Label for="uf"> UF </Label>
                            <Input onChange={(a) => handleAddress(a)} value={address.uf} type="text" id="uf" name="uf" required />
                        </Item>
                    </InnerContainer>
                    <InnerContainer>
                        <Item>
                            <Label for="numero"> Número </Label>
                            <Input onChange={(a) => handleAddress(a)} value={address.numero} type="number" id="numero" name="numero" required />
                        </Item>
                        <Item>
                            <Label for="complemento"> Complemento </Label>
                            <Input onChange={(a) => handleAddress(a)} value={address.complemento} type="text" id="complemento" name="complemento" required />
                        </Item>
                    </InnerContainer>
                </EndContainer>
            </ContentContainer>

            <ButtonContainer>
                <Button type="submit" text={textButton} >
                </Button>
            </ButtonContainer>
        </FormContainer>
    );
};

// const [emailError, setEmailError] = useState('')
// const validateEmail = (e) => {
//     var email = e.target.value

//     if (validator.isEmail(email)) {
//         setEmailError('')
//     } else {
//         setEmailError('Insira um email válido. ')
//     }
// }
export default Form; 