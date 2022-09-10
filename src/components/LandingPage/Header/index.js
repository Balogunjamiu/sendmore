import React from 'react'
import { ButtonWrapper, HeaderWrapper, InputWrapper, LogoWrapper } from './styled'
import Logo from '../../../logo.svg'
import Button from '../../styledButton'
import { useNavigate } from 'react-router-dom'

export default function Header() {
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

    </HeaderWrapper>
  )
}
