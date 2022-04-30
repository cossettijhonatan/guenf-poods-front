import { Link } from "react-router-dom";
import react, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import Button from "../components/Button";
import Pedido from "../components/Pedido"
import RelatorioFields from "../components/PedidoFields";
import Header from "../components/Header";


const Cadastro = () => {

    const url = "http://localhost:3000/pedidos";
    const [pedidos, getPedidos] = useState('')

    useEffect(() => {
        getAllpedidos()
    }, [])


    const getAllpedidos = async () => {
        Axios.get(url)
            .then((response) => {
                const allpedidos = response.data
                console.log(allpedidos)
                getPedidos(allpedidos)
            })
            .catch((e) => {
                console.error(e);
            })
    }


    useEffect(() => {
        console.log(Array.isArray(pedidos));
    }, [pedidos])


    let textButton = '+ Cadastrar novo pedido'
    return (
        <>
            <Header />
            <BG>
                <Wrapper>
                    <TopContainer>
                        Pedidos
                        <Link to="/pedidos">
                            <Button text={textButton} />
                        </Link>
                    </TopContainer>
                    <BottomContainer>
                        <RelatorioFields />
                        {Array.isArray(pedidos) &&
                            pedidos.map(element => (
                                <Pedido
                                    key={element.id}
                                    nome={element.Instituicao}
                                    data={element.data}
                                    valor={element.valor}
                                    status={element.status}
                                    id={element.id}
                                />
                            )
                            )}
                    </BottomContainer>
                </Wrapper>
            </BG>
        </>
    );
};

export default Cadastro;

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

const BottomContainer = styled.div`
    margin: 20px;
    overflow-y: auto;
`