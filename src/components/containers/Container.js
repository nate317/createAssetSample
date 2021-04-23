import styled from 'styled-components';

const Container = styled.div`
    border-radius: 10px;
    border: 2px solid #adadad;
    background-color: ${props => props.primary ? '#ffffff' : 'rgb(248, 248, 248)'};
    color: black;
    min-height: ${props => props.short ? '5%' : '50%'};
    max-height: ${props => props.short ? '20%' : '100%'};
    padding: 10px;
`
export default Container;