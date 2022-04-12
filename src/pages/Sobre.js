import React from 'react';
import styled from 'styled-components'

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

const TextSide = styled.div`
    max-width: 65%; 
    display: flex; 
    align-items: center; 
`

const TextWrapper = styled.div`
    margin: 40px 50px; 
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Text = styled.div`

`

const Buttons = styled.div`
display: flex; 
justify-content: space-around;
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

const LogoSide = styled.div`
    background-color: #6B0F1A;
    min-width: 35%;
    display: flex; 
    justify-content: center;
    align-items: center; 
`
const Logo = styled.p`
    color: #FFF; 
    font-size: 50px; 
    font-weight: 400; 
    text-align: center; 
    line-height: 0.3;
    
`

const H3 = styled.h3` 
    font-weight: 700; 
    margin: 12px 0;
`

const Sobre = () => {
    return (
        <>
            <BG>
                <Wrapper>
                    <TextSide>
                        <TextWrapper>
                            <Text>
                                <H3> Sistema de Distribuição de Alimentos - SDA </H3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Morbi enim nunc faucibus a. Lectus vestibulum mattis ullamcorper velit. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Proin fermentum leo vel orci porta non pulvinar. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Dolor sed viverra ipsum nunc. Interdum velit euismod in pellentesque massa. Placerat duis ultricies lacus sed turpis tincidunt. Ultricies leo integer malesuada nunc vel. Enim ut sem viverra aliquet. Egestas erat imperdiet sed euismod nisi. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Euismod in pellentesque massa placerat duis ultricies lacus sed. Id volutpat lacus laoreet non curabitur gravida. Malesuada nunc vel risus commodo viverra maecenas.
                                </p>
                                <p>
                                    Et voluptatibus illum qui neque quaerat ut quidem esse et reiciendis fugit est libero dolores ab error dolorem est fugiat eveniet. Eum consequatur sunt et totam accusamus aut aliquid amet est omnis sint ab galisum autem ab inventore odio. Id voluptas unde At mollitia nostrum aut mollitia blanditiis sed pe
                                </p>
                                <H3> Informações do Sistema </H3>
                                <p>
                                    Et voluptatibus illum qui neque quaerat ut quidem esse et reiciendis fugit est libero dolores ab error dolorem est fugiat eveniet. Eum consequatur sunt et totam accusamus aut aliquid amet est omnis sint ab galisum autem ab inventore odio. Id voluptas unde At mollitia nostrum aut mollitia blanditiis sed pe
                                    Lorem ipsum dolor sit amet. Id dolorem dolor aut voluptatem temporibus sit nobis.
                                </p>
                            </Text>
                            <Buttons>
                                <Button>Download do Manual</Button>
                                <Button>Entre em contato</Button>
                            </Buttons>
                        </TextWrapper>
                    </TextSide>
                    <LogoSide>
                        <Logo> Logo </Logo>
                    </LogoSide>
                </Wrapper>
            </BG>
        </>
    );
}

export default Sobre; 