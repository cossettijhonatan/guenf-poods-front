import styled from "styled-components";
export const FormContainer = styled.form`
width: 90%;
height: 65%;
padding: 30px 0 0;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const IdContainer = styled.div`
width: 40%;
height: 70%;
padding: 0 30px; 
display: flex;
flex-direction: column;
justify-content: space-around; 
`;

export const EndContainer = styled.div`
width: 40%;
padding: 0 30px; 
height: 70%;
display: flex;
flex-direction: column;
justify-content: space-around; 
`;

export const Title = styled.h2`
font-weight: 700; 
`;

export const Label = styled.label`
font-weight: 300;
font-size: 15px; 
display: block;
width: 150px;
float: left;
margin: 16px 0 6px 0px; 
`;

export const Input = styled.input` 
border: 1px solid rgba(0, 0, 0, 0.5);
font-size: 13px; 
padding: 6px;
border-radius: 3px;
width: 100%; 

&:focus {
    outline: none;
    box-shadow: 0px 0px 2px #000;
}
`;

export const InnerContainer = styled.div`
display: flex; 
justify-content: space-between; 
width: 100%; 
`;

export const Item = styled.div`
width: 40%;
display: flex; 
flex-direction: column; 
`;

export const ContentContainer = styled.div`
display: flex; 
justify-content: space-around;
align-items: baseline;
`;

export const ButtonContainer = styled.div`
width: 100%; 
display: flex; 
justify-content: center;
`;