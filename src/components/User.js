import styled from "styled-components";
import user from "../images/user.png"
import { logout } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const User = (props) => {
    return (
        <Wrapper>
            <img src={user} width="100px" style={{ borderRadius: "50%", border: "1px solid #6B0F1A" }} />
            <Item>
                <Title> {props.info.displayName} </Title>
                {props.info.email}
            </Item>
            Editar perfil
            <Button onClick={() => { logout() }}>Sair </ Button >
        </Wrapper>
    );
}

export default User

const Wrapper = styled.div`
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

const Item = styled.div`
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
const Title = styled.span`
    font-size: 20px;
    font-weight: 600;
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