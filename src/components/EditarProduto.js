import React, { useState, useEffect } from "react";
// import validator from 'validator' 
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Button from "./Button";
import axios from "axios";
import { Label, Input } from './Style'
import ProdutoSuccess from "./ProdutoSuccess";

const EditarProduto = (props) => {
    let textButton = 'Atualizar'
    const url = `http://localhost:3000/produtos/${props.id}`
    const [sent, setSent] = useState(false)
    const [data, setData] = useState({
        nome: "",
        quantidade: "",
        preco: ""
    })

    useEffect(() => { getProduto() }, [])

    const getProduto = async () => {
        axios.get(url)
            .then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            .catch((e) => {
                console.error(e);
            })
    }

    function submit(s) {
        console.log('submit', s)
        s.preventDefault();
        axios.put(url, {
            nome: data.nome,
            quantidade: data.quantidade,
            preco: data.preco
        })
            .then(() => {
                setSent(true);
                setTimeout(() => { props.setEdit(false); }, 3000);
            })
    }

    function handle(d) {
        const newData = { ...data };
        newData[d.target.id] = d.target.value;
        setData(newData);
    }


    const cancelHandler = () => {
        props.setEdit(false)
    }

    return (
        <>
            <FormContainer onSubmit={(s) => submit(s)}>
                {!sent &&
                    <>
                        <p style={{ fontWeight: "600", fontSize: "17px", paddingBottom: "15px", width: "100%", display: "flex", justifyContent: "center" }}>Atualizar  produto</p>
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
                    </>
                }
                {sent &&
                    <ProdutoSuccess text={"Produto atualizado com sucesso!"}></ProdutoSuccess>}
            </FormContainer>
            <div style={{ marginTop: "10px" }}>
                <Button func={cancelHandler} text={"Cancelar"} />
            </div>
        </>
    );
};

export default EditarProduto;


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

const ButtonContainer = styled.div`
width: 100%; 
display: flex; 
justify-content: center;
`;
