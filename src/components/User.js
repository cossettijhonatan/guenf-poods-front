import styled from "styled-components";
import user from "../images/user.png"
import { logout } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const User = (props) => {
    const [loggedout, setLogout] = useState(false)
    const navigate = useNavigate()
    async function logoutHandler() {
        await logout();
        setLogout(true);
        console.log("testessss")
        navigate("/login")
    }

    return (
        <WrapperUser>
            <img src={user} width="100px" style={{ borderRadius: "50%", border: "1px solid #6B0F1A" }} />
            <ItemUser>
                <TitleUser> {props.info.displayName} </TitleUser>
                {props.info.email}
            </ItemUser>
            Editar perfil
            <ButtonUser onClick={logoutHandler}><StyledLink to={"/login"}> SAIR </StyledLink></ ButtonUser >
        </WrapperUser>
    );
}

export default User

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