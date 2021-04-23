import styled from 'styled-components';

const Button = styled.button`
    border-radius: 10px;
    border: 2px solid #ffffff;
    background-color: ${props => props.primary ? '#adadad' : 'blue'};
    color: ${props => props.primary ? 'blue' : 'white'};
    min-height: 35px;
    min-width: ${props => props.bar ? '100%' : '100px'};
    padding: 1px;

    :hover {
        border-color: blue;
        cursor: pointer;
    }
`
export default Button;