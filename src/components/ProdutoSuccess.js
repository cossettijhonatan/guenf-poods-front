import styled from "styled-components";
const Wrapper = styled.div`
    border-bottom: 3px solid #6cc070;

    width: fit-content;
    margin: 50px 0 0 0; 
    padding: 15px; 
    box-shadow: 4px 2px 8px 0px rgba(0, 0, 0, 0.5);
`

const ProdutoSuccess = (props) => {
    return (
        <Wrapper>
            <h4> <span style={{ color: "#6cc070", fontWeight: "700", marginRight: "6px" }}>✓</span> {props.text}</h4>
        </Wrapper>
    );
}

export default ProdutoSuccess;