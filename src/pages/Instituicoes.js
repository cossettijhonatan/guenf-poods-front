import { Link } from "react-router-dom";
import react, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import styled from "styled-components";
import Button from "../components/Button";
import Instituicao from "../components/Instituicao";
import InstituicaoFields from "../components/InstituicaoFields";
import Header from "../components/Header";
import NotAllowed from './NotAllowed'
import Modal from "../components/Modal"


const Cadastro = (props) => {
    const [toDelete, setToDelete] = useState(false)
    const [isModalOpen, switchModal] = useState(false)
    const url = "https://sda-api.herokuapp.com/instituicaos";
    const aux = true
    let textButton = '+ Cadastrar nova empresa'
    const [instituicoes, getInstituicoes] = useState('')

    useEffect(() => {
        getAllInstituicoes()
    }, [])

    useEffect(() => {
        getAllInstituicoes()
    }, [isModalOpen])

    const getAllInstituicoes = async () => {
        Axios.get(url)
            .then((response) => {
                getInstituicoes(response.data)
            })
            .catch((e) => {
                console.error(e);
            })
    }

    if (!!props.user) {
        return (
            <>
                <Header />
                <BG>
                    {isModalOpen && (<Modal id={toDelete} switchModal={switchModal} />)}
                    <Wrapper>
                        <TopContainer>
                            Empresas
                            <Link to="/cadastrar-empresa">
                                <Button text={textButton} />
                            </Link>
                        </TopContainer>
                        <BottomContainer>
                            <InstituicaoFields />
                            {Array.isArray(instituicoes) &&
                                instituicoes.map((element, index) => (
                                    <Instituicao
                                        index={index}
                                        id={element.id}
                                        key={element.id}
                                        nome={element.nomeFantasia}
                                        cnpj={element.cnpj}
                                        email={element.mail}
                                        endereco={element.endereco}
                                        numero={element.numero}
                                        bairro={element.bairro}
                                        cep={element.cep}
                                        cidade={element.cidade}
                                        uf={element.uf}
                                        setToDelete={setToDelete}
                                        switchModal={switchModal}
                                        setEdit={props.setEdit}
                                    />
                                )
                                )}
                        </BottomContainer>
                    </Wrapper>
                </BG>
            </>

        );
    } else {
        return (<NotAllowed />)
    }

};

export default Cadastro;

const BG = styled.div`
    background-color: #E5E5E5; 
    width: 100vw;
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
`

const Wrapper = styled.div`
    margin: 90px 0 0 0; 
    width: 90vw; 
    height: 600px; 
    background-color: #FFF; 
    display: flex; 
    flex-direction: column;
    overflow-x: scroll;
    position: absolute;
`

const TopContainer = styled.div`
    border-bottom: 2px solid #E5E5E5; 
    min-height: 75px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500; 
    padding: 0 20px 0 20px; 
    font-size: 17px;
`

const BottomContainer = styled.div`
    margin: 20px;
    overflow-y: auto;
`