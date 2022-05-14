import styled from "styled-components";


const Tasks = () => {
    return (
        <Wrapper>
            Eventos do dia
            <Item>
                <Title> Daily </Title>
                9h30m - 10h
            </Item>
            <Item>
                <Title> Planejamento do Trimestre  </Title>
                14h - 15h
            </Item>
            <Item>
                <Title> Conversa sobre a nova PLR </Title>
                16h - 17h
            </Item>
        </Wrapper>
    );
}

export default Tasks

const Wrapper = styled.div`
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    color: black;
    padding: 16px;
    width: calc(100% / 2);
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