import styled from "styled-components";
import { Button_color} from "../../../styles/variables";

export const SidebarRightWrapper = styled.div`
display: flex;
flex-direction: column;
`

export const ArrivalWrapper= styled.div`
display: flex;
padding: 1rem;
justify-content:space-between;
`
export const ArrivalText = styled.p`
    font-weight: 600;
`

export const DriverInfoWrapper = styled.div`
display: flex;
flex-direction: row;
`
export const DriverSection1 = styled.div`
flex: 1;
`
export const DriverIcon = styled.img`
width: 100%;
`
export const DriverSection2 = styled.div`
flex: 4;
display: flex;
flex-direction: column;
padding-left: .5rem;
align-items: center;
justify-content: center;
`
export const DriverText = styled.p`
    
`
export const DriverText1 = styled.p`
 
`
export const DriverSection3 = styled.div`
flex:2;
display: flex;
flex-direction: column;

`
export const Rating = styled.div`
font-weight: 600;
margin-bottom:-.1rem;
`
export const RatingStarIcon = styled.img`
width: 25%;
padding-bottom:.2rem;
`
export const DriverPhone = styled.p`
font-size:.5rem;
font-weight:600;
`
export const CallandMessage = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
height: 5%;
width: 20%;
`

export const CustomerCare = styled.div`
display:flex;
flex-direction: center;
`
export const Segment = styled.div`
padding: .07rem;
margin-top: 1rem;
margin-bottom: 1rem;
border-radius: 50%;
width: 100%;
background-color: ${Button_color};
`