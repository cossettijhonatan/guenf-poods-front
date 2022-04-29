import { Link } from "react-router-dom";
import react, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import Button from "../components/Button";
import Instituicao from "../components/Instituicao";
import InstituicaoFields from "../components/InstituicaoFields";


const Cadastro = () => {

    const url = "http://localhost:3000/instituicaos";
    const [instituicoes, getInstituicoes] = useState('')

    useEffect(() => {
        getAllInstituicoes()
    }, [])


    const getAllInstituicoes = async () => {
        Axios.get(url)
            .then((response) => {
                const allInstituicoes = response.data
                console.log(allInstituicoes)
                getInstituicoes(allInstituicoes)
            })
            .catch((e) => {
                console.error(e);
            })
    }


    useEffect(() => {
        console.log(Array.isArray(instituicoes));
    }, [instituicoes])


    let textButton = '+ Cadastrar nova instituição'
    return (
        <BG>
            <Wrapper>
                <TopContainer>
                    Instituições
                    <Link to="/cadastrar-instituicao">
                        <Button text={textButton} />
                    </Link>
                </TopContainer>
                <BottomContainer>
                    <InstituicaoFields />
                    {Array.isArray(instituicoes) &&
                        instituicoes.map(element => (
                            <Instituicao
                                key={element.id}
                                nome={element.nomeFantasia}
                                cnpj={element.cnpj}
                                email={element.mail}
                                endereco={element.endereco}
                                id={element.id}
                            />
                        )
                        )}
                </BottomContainer>
            </Wrapper>
        </BG>
    );
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