import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Modal = (props) => {
    const url = `http://localhost:3000/instituicaos/${props.id}`
    const [empresaData, setEmpresaData] = useState("");
    const handlerDelete = () => {
        axios.delete(url)
            .then((response) => {
                console.log(response)
                props.switchModal(false)
            })
            .catch((e) => {
                console.error(e);
            })
    }

    const getEmpresa = async () => {
        axios.get(url)
            .then((response) => {
                setEmpresaData(response.data)
            })
            .catch((e) => {
                console.error(e);
            })
    }

    useEffect(() => { getEmpresa() }, [url])
    return (
        <>
            <ModalStyle>
                <div style={{ display: "flex", justifyContent: "center" }}> Deletar o cadastro de </div>
                <div style={{ display: "flex", textAlign: "center", justifyContent: "center", fontSize: "18px", fontWeight: "600" }}>
                    {empresaData.nomeFantasia} <br />
                    {empresaData.cnpj}
                </div>
                <ButtonArea>
                    <Button onClick={() => { props.switchModal(false) }}> Cancelar </Button>
                    <Button onClick={handlerDelete}> Confirmar </Button>
                </ButtonArea>
            </ModalStyle>
        </>
    );
}

const ModalStyle = styled.div`
    background-color: #fff;
    border-radius: 8px;
    width: 400px;
    height: 200px;
    position: relative;
    transform: 'translate(-50%, -50%)';
    z-index: 1000;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ButtonArea = styled.div`
display: flex; 
justify-content: space-around;
align-items: center; 
`


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

export default Modal;