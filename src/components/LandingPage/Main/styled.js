import styled from 'styled-components'

export const MainWrapper = styled.div`
width:100hv;
height:100vw;
background-color: black;
align-items:center;


`


export const TalkWrapper = styled.div`
width: 100%;
flex-direction:row;


`
export const TextWrapper = styled.div`
background-color:black;
width:40%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
font-size:30px;
margin-left:2rem;
font-weight: 500;

@media (max-width:768px){
    width:90%;
    justify-content:center;
    margin:0px;
}

`
export const TexAndLottieWrapper = styled.div`
color:white;
width:100%;
display:flex;
justify-content:space-between;
flex-direction:row;
@media (max-width:768px){
    margin-top:2rem;
    display:flex;
    flex-direction:column;
}

`