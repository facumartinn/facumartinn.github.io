import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
    border: 2px solid #000000;
    color: #000000;
    border-radius: 0;
    transition: all 0.2s;
    padding: 15px 25px;
    background-color: transparent;
    font-size: 16px;
    font-weight: 400;

    &:hover {
        background-color: #ffffff !important;
        border: 2px solid #000000 !important;
        box-shadow: 5px 5px black;
        color: #000000 !important;
        transform: translate(-0.4rem, -0.4rem);
    }
`

const Button = ({children}) => {
    return <StyledButton>{children}</StyledButton>
}

export default Button