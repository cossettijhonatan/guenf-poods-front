import styled from "styled-components";
import Form from "../components/Form";

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
    flex-direction: column; 
    align-items: center; 
    justify-content: space-evenly; 

`
const TopContainer = styled.h1`
    border-bottom: 2px solid #E5E5E5; 
    width: 100%; 
    display: flex;
    align-items: center;
    font-weight: 500; 
    padding: 0 0 35px 60px;
`

const Cadastro = () => {
    return (
        <BG>
            <Wrapper>
                <TopContainer>
                    Instituições
                </TopContainer>
                <Form />
            </Wrapper>
        </BG>
    );
};

export default Cadastro; 