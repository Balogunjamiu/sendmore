import styled from "styled-components";
import { Button_color, duration } from "../../../styles/variables";

export const SidebarLeftWrapper = styled.div`
display:flex;
flex-direction:column;
`
export const SidebarLeftContact = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
 width: 100%;
 margin-top: 1rem;
`
export const SidebarLeftContactAvatar = styled.img`
    margin: 0px !important;
`
export const SidebarLeftContactText = styled.div`
font-weight: 500;
margin-bottom: 1rem;
`
export const SidebarLeftContactPhone = styled.div`
background-color: ${Button_color};
padding: .5rem;
margin-top: .5rem;
border-radius: 15px;
`
export const Segment = styled.div`
padding: .07rem;
margin-top: 1rem;
margin-bottom: 1rem;
border-radius: 50%;
width: 100%;
background-color: ${Button_color};
`
export const SidebarLeftMiddleWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 10%;
`

export const SidebarLeftIcon1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
    `
export const SidebarLeftIcon1Content = styled.img` 
border-radius: 50px;
transition-property: background-color;
transition-duration: ${duration};
background-color: ${(props) => (props.clicked ? `${Button_color}` : 'white')};
&:hover{
     background-color: ${Button_color}
}

    
`
export const SidebarLeftIcon2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const SidebarLeftIcon2Content = styled.img`
border-radius: 50px;
transition-property: background-color;
transition-duration: ${duration};
background-color: ${(props) => (props.clicked ? `${Button_color}` : 'white')};
&:hover{
     background-color: ${Button_color}
}
`
export const SidebarLeftIcon3 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const SidebarLeftIcon3Content = styled.img`

`