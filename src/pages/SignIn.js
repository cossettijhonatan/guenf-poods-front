import styled from "styled-components";

const BG = styled.div`
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  background: linear-gradient(to bottom, #6B0F1A 0%, #6B0F1A 50%, #FFF 50%, #FFF 100%);
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  color: #FFF;
  font-size: 64px;
  margin-bottom: 70px; 
`
const Wrapper = styled.div`
  background-color: #FFF;
  width: 620px; 
  height: 270px;
  padding: 40px 50px; 
  border: 1px solid black; 
  display: flex; 
  flex-direction: column; 
  justify-content: flex-end;
`
const Text = styled.p`
  font-weight: 700;
  color: #000;
  font-size: 24px;
  margin-bottom: 30px; 
`

const Form = styled.form`
  height: 200px;  
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
`

const Button = styled.button`
  padding: 7px;
  backcground-color: #000; 
  color: #FFF; 
  border-radios: 8px; 
`

function App() {
  return (
    <BG>
      <Title>
        SDA
      </Title>
      <Wrapper>
        <Text> Acesse sua conta </Text>

        <Button>Entrar</Button>
      </Wrapper>
    </BG>
  );
}

export default App;
