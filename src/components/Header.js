import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

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

const Logo = styled.p`
    color: #6B0F1A;
    font-size: 22px; 
    
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
                    <li><StyledLink to="/welcome" ><Logo>SDA </Logo></StyledLink></li>
                    <li><StyledLink to="/cadastros">CADASTROS</StyledLink></li>
                    <li><StyledLink to="/pedidos">PEDIDOS</StyledLink></li>
                    <li><StyledLink to="/relatórios">RELATÓRIOS</StyledLink></li>
                    <li><StyledLink to="/sobre">SOBRE</StyledLink></li>
                </Menu>
            </Nav>
        </>
    );
}

export default Header;