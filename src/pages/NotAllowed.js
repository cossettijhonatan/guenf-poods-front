import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Locker from "../images/locker";

const NotAllowed = () => {
    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center" }}>
            <Wrapper>
                <Locker />
                <Text>
                    Desculpe, mas você não possui autorização para acessar esta página. <br />
                    Para acessar, faça <StyledLink to={"/login"}>login</StyledLink> ou <StyledLink to={"/cadastro"}>cadastre-se</StyledLink>.
                </Text>
            </Wrapper>
        </div>
    );
}

export default NotAllowed;

const Wrapper = styled.div`
width: 700px;
height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Text = styled.div`
    margin-top: 20px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #6B0F1A;
    font-weight: 600;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        color: #6B0F1A; 
    }
`;