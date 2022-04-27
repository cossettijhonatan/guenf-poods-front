import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

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
const TopContainer = styled.div`
    border-bottom: 2px solid #E5E5E5; 
    width: 100%; 
    height: 50px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px; 
    font-weight: 500; 
`

const Cadastro = () => {
    let textButton = '+ Cadastrar nova instituição'
    return (
        <BG>
            <Wrapper>
                <TopContainer>
                    Instituições

                    <Link to="/cadastrar">
                        <Button text={textButton} />
                    </Link>
                </TopContainer>
            </Wrapper>
        </BG>
    );
};

export default Cadastro; 