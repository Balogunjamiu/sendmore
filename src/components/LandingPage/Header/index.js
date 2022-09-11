import React, { useState } from  'react'
import { ButtonWrapper, HeaderWrapper, InputWrapper, LogoWrapper, Icon,
   MenuLabel,
  MenuWrapper,
MenuList,MenuUl } from './styled';
import { Link } from 'react-router-dom';
import Logo from '../../../logo.svg'
import Button from '../../styledButton'
import { useNavigate } from 'react-router-dom'
import useScreenSize from '../../../hooks/useScreenSize';

export default function Header() {

const screenSize = useScreenSize()

const mobileView =(()=> screenSize <= '765px')
const mobile = mobileView()
console.log(mobile)
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
  const navigate = useNavigate()
  return (
    <HeaderWrapper>
       
       <LogoWrapper>
        <img  src={Logo} width="80px" alt='sendMore Logo'  /> 
        </LogoWrapper> 
        <InputWrapper>
        <input 
        />
        </InputWrapper>

        <ButtonWrapper>
                <Button type={'primary'} onClick={()=>{navigate('/login')}} text={'Sign in'} />
                <Button type={'secondary'} onClick={()=>{navigate('/signup')}} text={'Sign up'} />
        </ButtonWrapper>
         
          
        <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                <Icon clicked={click}>&nbsp;</Icon>
        </MenuLabel>
        <MenuWrapper clicked={click}>
        <MenuUl>
            <MenuList ><Link to={'/'}>Home</Link> </MenuList>
            <MenuList> <Link to={'/about'}>About</Link> </MenuList>
            <MenuList> <Link to={'/contact'}>Contact Us</Link> </MenuList>
            <MenuList> <Link to={'/'}>FAQ</Link> </MenuList>
        </MenuUl>
    </MenuWrapper>
    </HeaderWrapper>
  )
}
