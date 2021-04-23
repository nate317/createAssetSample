import styled from 'styled-components';

const CheckBox = styled.input`
border-radius: 5px;
border: 1px solid lightgrey;
background-color: ${props => props.primary ? 'darkblue' : 'mustard'};
color: ${props => props.primary ? 'white' : 'black'};
min-height: 35px;
min-width: ${props => props.bar ? '100%' : '100px'};
padding: 1px;
margin: 3px;

:hover {
    border-color: blue;
    cursor: pointer;
}
`
export default CheckBox;