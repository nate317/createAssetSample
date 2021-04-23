import styled from 'styled-components';

const Card = styled.div`
    border-radius: 5px;
    border: 2px solid #b1b1b1be;
    background-color: ${props => props.primary ? 'white' : 'lightgrey'};
    color: black;
    min-height: 6em;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 1em;

`

export default Card;