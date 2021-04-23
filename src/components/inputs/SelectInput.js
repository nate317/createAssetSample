import styled from 'styled-components';

const SelectInput = styled.select`
    border-radius: 5px;
    border: 1px solid lightgrey;
    background-color: white;
    color: black;
    min-height: 30px;
    min-width: ${props => props.bar ? '80%' : '60%'};
    padding: 1px;
    margin: 3px;
    float: right;

    :focus {
        outline-color: blue;
    }
`;

export default SelectInput;