import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header';
import Logo from '../images/logo'
import NotAllowed from './NotAllowed';

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
    width: 80vw; 
    height: 600px; 
    background-color: #FFF; 
    display: flex; 

`

const TextSide = styled.div`
    max-width: 65%; 
    display: flex; 
    align-items: center; 
`

const TextWrapper = styled.div`
    margin: 40px 50px; 
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Text = styled.div`

`

const Buttons = styled.div`
display: flex; 
justify-content: space-around;
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

const LogoSide = styled.div`
    background-color: #6B0F1A;
    min-width: 35%;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    color: #fff;
    font-size: 32px;
`

const H3 = styled.h3` 
    font-weight: 700; 
    margin: 12px 0;
`
const H2 = styled.h2` 
    font-weight: 600; 
    margin: 30px 0 10px ;
`

const Sobre = (props) => {
    if (!!props.user) {
        return (
            <>
                <Header />
                <BG>
                    <Wrapper>
                        <TextSide>
                            <TextWrapper>
                                <Text>
                                    <H3> Sistema de Distribuidora de Alimentos - SDA </H3>
                                    <H2> O que é SDA? </H2>
                                    <p style={{ textAlign: "justify" }}> SDA é um ERP (do inglês "Enterprise Resource Planning", que traduzindo significa "Planejamento  dos Recursos da Empresa) é um sistema de
                                        gestão empresarial que serve para automatizar processos, integrar informações de diferentes setores
                                        de uma empresa e organizar o fluxo de trabalho da mesma.
                                    </p>
                                    <H2> Informações do Sistema </H2>
                                    <p style={{ textAlign: "justify" }}>
                                        Este software foi desenvolvido utilizando conceitos de Orientação a Objetos a fim de obter nota para aprovação na disciplina Paradigma Orientado à Objetos para Desenvolvimento de Software, seu propósito é apenas educacional.
                                    </p>
                                    <div style={{ margin: "10px 0 0 0 " }}>
                                        <ul>
                                            <li> GNU GENERAL PUBLIC LICENSE</li>
                                            <li> Copyright (c) 2022 - Ausberto S. Castro e Maria Luiza de Souza Stellet </li>
                                            <li> Versão atual do software <b>1.0.2</b> </li>
                                            <li> Universidade Estadual do Norte Fluminense Darcy Ribeiro - UENF </li>
                                            <li> Centro de Ciência e Tecnologia - CCT</li>
                                            <li> Bacharel em Ciência da Computação - CC </li>
                                        </ul>
                                    </div>
                                </Text>
                                <Buttons>
                                    <Button>Download do Manual</Button>
                                    <Button><StyledLink href="mailto:marialuiza@pq.uenf.br,ascv@uenf.br">Entre em contato </StyledLink></Button>
                                </Buttons>
                            </TextWrapper>
                        </TextSide>
                        <LogoSide>
                            <div style={{ padding: "12px" }}>
                                <Logo width="70px" height="70px" color="#fff" />
                            </div>
                            SDA
                        </LogoSide>
                    </Wrapper>
                </BG>
            </>
        );
    } else {
        return (<NotAllowed />)
    }
}


const StyledLink = styled.a`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export default Sobre; 