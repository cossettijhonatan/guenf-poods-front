import { useContext } from "react";
import styled from "styled-components";
import Form from "../components/EditarFomEmpresa";
import Header from "../components/Header";
import Context from "./context";

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
    justify-content: center

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


const Editar = (props) => {
    const id = useContext(Context)
    console.log(id)
    return (
        <>
            <Header />
            <BG>
                <Wrapper>
                    <TopContainer>
                        Instituições
                    </TopContainer>
                    <Form id={props.id} />
                </Wrapper>
            </BG>
        </>
    );
};

export default Editar; 