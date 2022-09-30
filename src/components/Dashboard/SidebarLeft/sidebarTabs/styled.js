import styled from "styled-components";
import { Button_color, duration } from "../../../../styles/variables";

export const SidebarTabWrapper = styled.div`
display: flex;
flex-direction:row;
justify-content: space-between;
transition-property: color;
transition-duration: ${duration};
&:hover{
 color: ${Button_color};
}
`
export const IconandText = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 1rem;
margin-left: ${(props)=> (props.marginLeft === '0px' ? '0px': '')}

`
export const Icons = styled.img`
width: 15%;
margin-right: .3rem;
`
export const Texts = styled.div`
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width:3.75rem;
`

export const SidebarArrowLeft = styled.img`
display: flex;
padding: 1rem;
flex-direction: row;
width: 20%;R

`