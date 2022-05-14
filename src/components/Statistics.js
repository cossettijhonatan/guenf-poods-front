import styled from "styled-components";


const Statistics = () => {
    return (
        <Wrapper>
            <Item>
                Instiuições atendidas
                <Value> 14 </Value>
            </Item>
            <Item>
                Produtos entregues
                <Value> 37.168 </Value>
            </Item>
            <Item>
                Receita gerada
                <Value> 132.589,72 </Value>
            </Item>
        </Wrapper>
    );
}

export default Statistics

const Wrapper = styled.div`
    background-color: #6B0F1A;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    width: 70vw; 
`

const Item = styled.div`
    width: calc(100% / 3);
    height: 120px;
    color: white;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    border: 1px solid white;
`
const Value = styled.span`
    font-size: 36px;
    font-weight: 600;
`