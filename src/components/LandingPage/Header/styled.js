import styled from 'styled-components'
 

export const HeaderWrapper = styled.div`
 width: 100%;
display: flex;
flex-direction:row;
background-color:#161616;
flex: 1;
`
export const LogoWrapper = styled.div`
width: 100%;
align-items: flex-start;
flex:1
`
export const InputWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex: 3;
input{
    flex:1;
    border: none;
    padding:.3rem;
}
`

export const ButtonWrapper = styled.div`
width: 100%;
flex:1;
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
`