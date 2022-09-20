import styled, { keyframes } from 'styled-components'

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
    const move_sideway = keyframes`
    from, to{
        transform:none
    }
    50%{
        transform:translateX(10%)
    }
    `

export const LottieAnimation = styled.div`
animation:${move_sideway} 3s linear;
animation-iteration-count:infinite;
animation-fill-mode: both;
&:hover{
animation-play-state:paused;
}
`