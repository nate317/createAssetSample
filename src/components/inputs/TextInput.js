import styled from 'styled-components';

const TextInput = styled.input`
    border-radius: 5px;
    border: 1px solid #adadad;
    background-color: #ffffff;
    color: #000000;
    min-height: 30px;
    max-height: 30px;
    min-width: ${props => props.bar ? '80%' : '60%'};
    padding: 1px;
    float: right;

    :focus {
        outline-color: blue;
    }
`
export default TextInput;