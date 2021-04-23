import styled from 'styled-components';

const Container = styled.div`
    border-radius: 5px;
    border: 2px solid #b1b1b1be;
    background-color: ${props => props.primary ? 'white' : 'lightgray'};
    color: black;
    min-height: ${props => props.short ? '5%' : '50%'};
    max-height: ${props => props.short ? '20%' : '100%'};
    padding: 10px;
    margin: 10px;
`
export default Container;