import React, { useEffect, useState } from "react";
import Statistics from "../components/Statistics";
import { logout } from "../firebase/firebase";
import Tasks from "../components/Tasks";
import user from "../images/user.png"
import Header from "../components/Header";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = (props) => {
    async function logoutHandler() {
        await logout();
        props.setLogout(true);
    }

    return (
        <>
            <Header />
            <BG>
                <Wrapper>
                    Olá, {props.user.displayName || props.user.email}!
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Statistics />
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-around", margin: "20px 0" }}>
                            <Tasks />
                            <WrapperUser>
                                <img src={user} width="100px" style={{ borderRadius: "50%", border: "1px solid #6B0F1A" }} />
                                <ItemUser>
                                    <TitleUser> {props.user.displayName} </TitleUser>
                                    {props.user.email}
                                </ItemUser>
                                Editar perfil
                                <ButtonUser onClick={logoutHandler}><StyledLink to={"/login"}> SAIR </StyledLink></ ButtonUser >
                            </WrapperUser>
                        </div>
                    </div>
                </Wrapper>
            </BG>
        </>
    )
}



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
    background-color: #E5E5E5; 
    width: 90vw; 
    height: 600px; 
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Info = styled.div`
`

export default Dashboard;


const WrapperUser = styled.div`
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    color: black;
    padding: 16px;
    width: calc(100% / 2.8);
`

const ItemUser = styled.div`
    height: 80px;    
    color: black;
    margin: 12px 10px;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: initial;

    border-left: 3px solid #6B0F1A;
`
const TitleUser = styled.span`
    font-size: 20px;
    font-weight: 600;
`
const ButtonUser = styled.button`
background-color: #6B0F1A;
color: #FFF; 
border: none;
border-radius: 4px; 
padding: 10px 20px; 
text-transform: uppercase;
font-family: 'Montserrat', sans-serif;
cursor: pointer; 
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
`