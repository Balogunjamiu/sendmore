import styled from "styled-components";

export const FooterWrapper = styled.div`
display: flex;
justify-content:center;
position: absolute;
bottom: 0px;
width: 100%;

@media (max-width:768px){
    display:none;
}

`

export const FooterUl = styled.ul`
display: flex;

`
export const FooterList = styled.li`
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
