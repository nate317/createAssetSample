import styled from 'styled-components';

const Button = styled.button`
    border-radius: 5px;
    border: 1px solid #b1b1b1be;
    background-color: ${props => props.primary ? 'white' : 'darkblue'};
    color: ${props => props.primary ? 'blue' : 'white'};
    min-height: 35px;
    min-width: ${props => props.bar ? '100%' : '100px'};
    padding: 1px;
    margin: 3px;

    :hover {
        border-color: blue;
        cursor: pointer;
    }
`
export default Button;