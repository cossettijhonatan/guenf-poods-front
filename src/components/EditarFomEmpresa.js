import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "./Button";
import Axios from "axios";
import { FormContainer, IdContainer, EndContainer, Title, Label, Input, InnerContainer, Item, ContentContainer, ButtonContainer } from './Style'

const Form = (props) => {
    const url = `http://localhost:3000/instituicaos/${props.id}`
    const [empresaData, setEmpresaData] = useState("");
    const navigate = useNavigate();
    const [data, setData] = useState({
        nomeFantasia: "",
        razaoSocial: "",
        mail: "",
        cnpj: "",
        telefone: "",
        endereco: "",
        cidade: "",
        bairro: "",
        cep: "",
        uf: "",
        numero: "",
        complemento: ""
    })

    const getEmpresa = async () => {
        Axios.get(url)
            .then((response) => {
                setEmpresaData(response.data)
            })
            .catch((e) => {
                console.error(e);
            })
    }

    useEffect(() => {
        getEmpresa();
    }, [url])

    console.log(empresaData)

    useEffect(() => {
        if (empresaData) {
            setData(empresaData);
        }
    }, [empresaData])

    let textButton = 'Atualizar'
    function submit(s) {
        s.preventDefault();

        Axios.put(url, {
            nomeFantasia: data.nomeFantasia,
            razaoSocial: data.razaoSocial,
            mail: data.mail,
            cnpj: data.cnpj,
            telefone: data.telefone,
            endereco: data.endereco,
            cidade: data.cidade,
            bairro: data.bairro,
            cep: data.cep,
            uf: data.uf,
            numero: data.numero,
            complemento: data.complemento
        })
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
        navigate("/empresas")
    }

    function handle(d) {
        const newData = { ...data };
        newData[d.target.id] = d.target.value;
        setData(newData);
    }

    return (
        <FormContainer onSubmit={(s) => submit(s)}>
            <ContentContainer>
                <IdContainer>
                    <Title> Dados de Identificação </Title>
                    <Label htmlFor="cnpj"> CNPJ </Label>
                    <Input onChange={(d) => handle(d)} value={data.cnpj} type="text" id="cnpj" name="cnpj" placeholder="XX. XXX. XXX/0001-XX." required />
                    <Label htmlFor="razaoSocial"> Razão Social </Label>
                    <Input onChange={(d) => handle(d)} value={data.razaoSocial} type="text" id="razaoSocial" name="razaoSocial" required />
                    <Label htmlFor="nomeFantasia"> Nome Fantasia </Label>
                    <Input onChange={(d) => handle(d)} value={data.nomeFantasia} type="text" id="nomeFantasia" name="nomeFantasia" required />
                    <Label htmlFor="telefone"> Telefone </Label>
                    <Input onChange={(d) => handle(d)} value={data.telefone} type="tel" id="telefone" name="telefone" required />
                    <Label htmlFor="mail"> Email </Label>
                    <Input onChange={(d) => handle(d)} value={data.mail} type="mail" id="mail" name="mail" required />
                </IdContainer>
                <EndContainer>
                    <Title>Dados de Endereço</Title>
                    <Label htmlFor="endereco"> Endereço </Label>
                    <Input onChange={(d) => handle(d)} value={data.endereco} type="text" id="endereco" name="endereco" required />
                    <InnerContainer>
                        <Item>
                            <Label htmlFor="cidade"> Cidade </Label>
                            <Input onChange={(d) => handle(d)} value={data.cidade} type="text" id="cidade" name="cidade" required />
                        </Item>
                        <Item>
                            <Label htmlFor="bairro"> Bairro </Label>
                            <Input onChange={(d) => handle(d)} value={data.bairro} type="text" id="bairro" name="bairro" required />
                        </Item>
                    </InnerContainer>
                    <InnerContainer>
                        <Item>
                            <Label htmlFor="cep"> CEP </Label>
                            <Input onChange={(d) => handle(d)} value={data.cep} type="number" id="cep" name="cep" required />
                        </Item>
                        <Item>
                            <Label htmlFor="uf"> UF </Label>
                            <Input onChange={(d) => handle(d)} value={data.uf} type="text" id="uf" name="uf" required />
                        </Item>
                    </InnerContainer>
                    <InnerContainer>
                        <Item>
                            <Label htmlFor="numero"> Número </Label>
                            <Input onChange={(d) => handle(d)} value={data.numero} type="number" id="numero" name="numero" required />
                        </Item>
                        <Item>
                            <Label htmlFor="complemento"> Complemento </Label>
                            <Input onChange={(d) => handle(d)} value={data.complemento} type="text" id="complemento" name="complemento" required />
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
//     var email = e.target.value
// const validateEmail = (e) => {

//     if (validator.isEmail(email)) {
//         setEmailError('')
//     } else {
//         setEmailError('Insira um email válido. ')
//     }
// }
export default Form; 