import styled from 'styled-components'
 

export const HeaderWrapper = styled.div`
 width: 100%;
display: flex;
flex-direction:row;
background-color:#181716;

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
@media (max-width:768px){
 display:none;   
}
`

export const ButtonWrapper = styled.div`
width: 100%;
flex:1;
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
@media (max-width:768px){
 display:none;   
}
`

export const MenuLabel = styled.label`
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 10%;
  height: 4rem;
  width: 6rem;
  cursor: pointer;
  z-index: 1000;
  text-align: center;
  @media (min-width:768px){
    display:none;   
   }
`;
export const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "white")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 2rem;

  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;
export const MenuWrapper = styled.div`
display: ${(props)=> (props.clicked? "flex" : "none")};
justify-content: center;
background-color: grey;
z-index:50;
position: absolute;
top: 2rem;
width: 100%;

`

export const MenuUl = styled.ul`
display: flex;
flex-direction:column;
`
export const MenuList = styled.li`
display: flex;
padding:1rem;
margin:2rem;
padding-bottom:0px;
margin-bottom:0px;

*{
    text-decoration:none;
    color:white;
}
@media (max-width:768px){
width:90%;
 padding:.5rem;
 margin:1.5rem;   
}

`