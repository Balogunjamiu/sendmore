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