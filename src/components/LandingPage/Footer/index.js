import React from 'react';
import {Link} from 'react-router-dom'
import { FooterUl, FooterWrapper,FooterList } from './styled'

export default function Footer() {
  return (
    <FooterWrapper>
        <FooterUl>
            <FooterList ><Link to={'/'}>Home</Link> </FooterList>
            <FooterList> <Link to={'/about'}>About</Link> </FooterList>
            <FooterList> <Link to={'/contact'}>Contact Us</Link> </FooterList>
            <FooterList> <Link to={'/'}>FAQ</Link> </FooterList>
        </FooterUl>
    </FooterWrapper>
  )
}