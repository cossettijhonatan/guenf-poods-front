import styled from "styled-components";

const InstituicaoFields = () => {

    return (
        <Wrapper>
            <Field> Código </Field>
            <Field> Nome </Field>
            <Field> Quantidade </Field>
            <Field> Preço </Field>
        </Wrapper>
    );

}

const Wrapper = styled.div`
    display: grid; 
    grid-template-columns: 130px 170px 190px 100px; 
    padding: 4px 0 16px 0;
    position: sticky;
`

const Field = styled.li`
    font-weight: 600;
    font-size: 17px;
    width: 250px; 
    list-style: none;
`

export default InstituicaoFields;