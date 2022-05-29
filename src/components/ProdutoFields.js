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
    padding: 4px 0 16px 0;
    margin: 0 0 0 10px;
    display: flex;
`

const Field = styled.li`
    min-width: 150px;
    font-weight: 600;
    font-size: 17px;
    list-style: none;
`

export default InstituicaoFields;