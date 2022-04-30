import styled from "styled-components";

const RelatorioFields = () => {

    return (
        <Wrapper>
            <Field> Código </Field>
            <Field> Nome </Field>
            <Field> Data do Pedido </Field>
            <Field> Valor </Field>
            <Field> Status </Field>
        </Wrapper>
    );

}

const Wrapper = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
    padding: 4px 0 16px 0;
    
`

const Field = styled.li`
    font-weight: 600;
    font-size: 17px;
    width: 250px; 
    list-style: none;
`

export default RelatorioFields;