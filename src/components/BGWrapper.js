import styled from "styled-components";

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


const BGWrapper = () => {
    return (
        <>
            <BG>
                <Wrapper>

                </Wrapper>
            </BG>
        </>
    );
}

export default BGWrapper;