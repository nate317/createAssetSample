import styled from 'styled-components';

const TextInput = styled.input`
    border-radius: 5px;
    border: 1px solid #adadad;
    background-color: #ffffff;
    color: #000000;
    min-height: 30px;
    max-height: 30px;
    min-width: ${props => props.bar ? '80%' : '60%'};
    max-width: 80%;
    padding: 1px;
    float: right;

    :focus {
        outline-color: blue;
    }

    @media only screen and (max-width: 662px) {
        float: none;
    }
`
export default TextInput;