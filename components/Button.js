import styled from "styled-components"

export const Button = styled.button`
    color: ${props => props.color || 'black'};
    background-color: ${props => props.backgroundColor || 'white'};
    font-size: ${props => props.fontSize || '1rem'};
    border-color: ${props => props.borderColor || 'black'};
    border-radius: ${props => props.borderRadius || '1px'};
    border: ${props => props.border || 'none'};

`