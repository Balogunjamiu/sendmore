import styled from 'styled-components'
import { Button_color, duration } from '../../styles/variables'

export const Buttons = styled.button`
    margin:.31rem;
    justify-content: center;
    align-items:center;
    border:none;
    display:flex;
    padding:.5rem;
    border-radius:8px;
    transition: all ${duration} linear;
    transition-property: transform, background-color;

    &:hover{
        transform:scale(1.09);
        background-color:${Button_color} !important;
    }
`