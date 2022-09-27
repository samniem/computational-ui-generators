import styled from 'styled-components'

export const Paragraph = styled.p`
    color: ${props => props.color || "black"};
    font: ${props => props.fontSize || "1rem"};
    padding: ${props => props.padding || "0px"};
`