import styled from 'styled-components';

const Button = styled.button`
    border-radius: 10px;
    border: 2px solid blue;
    background-color: ${props => props.primary ? '#ffffff' : 'blue'};
    color: ${props => props.primary ? 'blue' : '#ffffff'};
    min-height: 35px;
    min-width: ${props => props.bar ? '100%' : '100px'};
    padding: 1px;
    margin-bottom: ${props => props.margin3 ? '0.5em' : '0em'};

    :hover {
        background-color: blue;
        color: white;
        cursor: pointer;
    }
`
export default Button;