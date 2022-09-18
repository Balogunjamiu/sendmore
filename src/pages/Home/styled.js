import styled from 'styled-components'

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