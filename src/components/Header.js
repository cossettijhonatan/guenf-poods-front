import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Logo from '../images/logo'

const Nav = styled.nav`
    position: fixed; 
    background-color: #FFF; 
    width: 100vw;
    height: 90px;
    border-bottom: 4px solid #C4C4C4; 
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;

`

const Menu = styled.ul`
    width: 100%;
    display: flex; 
    justify-content: space-around;
    text-decoration: none;
    font-weight: 500;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        color: #6B0F1A; 
    }
`;

function Header() {

    return (
        <>
            <Nav>
                <Menu>
                    <StyledLink to="/home" ><Logo width="42px" height="42px" color="#6B0F1A" /></StyledLink>
                    <StyledLink to="/empresas">EMPRESAS</StyledLink>
                    <StyledLink to="/pedidos">PEDIDOS</StyledLink>
                    <StyledLink to="/produtos">PRODUTOS</StyledLink>
                    <StyledLink to="/sobre">SOBRE</StyledLink>
                </Menu>
            </Nav>
        </>
    );
}

export default Header;