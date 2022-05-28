import styled from "styled-components";

const InstituicaoFields = () => {

    return (
        <Wrapper>
            <Field> Nome </Field>
            <Field> CNPJ </Field>
            <Field> Email </Field>
            <Field> Endereco </Field>
            <ButtonArea />
        </Wrapper>
    );

}

const Wrapper = styled.div`
    display: flex; 
    justify-content: space-between;
    padding: 4px 10px 16px 10px;

    
`

const Field = styled.li`
    min-width: 250px; 
    width: 250px;
    font-weight: 600;
    font-size: 17px;
    width: 250px; 
    list-style: none;
`

const ButtonArea = styled.li`
min-width: 250px; 
width: 250px;;
list-style: none;
display: flex; 
justify-content: space-between;
align-items: center; 
font-weight: 300;
`




export default InstituicaoFields;