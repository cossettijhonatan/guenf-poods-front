import styled from "styled-components";

const InstituicaoFields = () => {

    return (
        <Wrapper>
            <Field> Código </Field>
            <Field> Nome </Field>
            <Field> Quant. </Field>
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
    min-width: 80px;
    margin: 0 15px 0 0;
    font-weight: 600;
    font-size: 17px;
    list-style: none;

  
    /* @media screen and (min-width: 2210px){ */
    width: 200px;
        min-width: 200px;
        max-width: 200px;
    /* } */

    @media screen and (max-width: 2210px){
        width: 170px;
        min-width: 170px;
        max-width: 170px;
    }

    @media screen and (max-width: 1940px){
        width: 150px;
        min-width: 150px;
        max-width: 150px;
    }

    @media screen and (max-width: 1750px){
        width: 120px;
        min-width: 120px;
        max-width: 120px;
    }

    @media screen and (max-width: 1500px){
        width: 100px;
        min-width: 100px;
        max-width: 100px;
    }

    @media screen and (max-width: 1300px){
        width: 80px;
        min-width: 80px;
        max-width: 80px;
    }

    @media screen and (max-width: 1124px){
        width: 60px;
        min-width: 60px;
        max-width: 60px;
    }
`

export default InstituicaoFields;