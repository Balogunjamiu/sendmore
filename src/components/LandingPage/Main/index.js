import React, { useEffect, useState } from 'react'
import location from '../../../assets/images/location.png'
import {
   MainWrapper,
TalkWrapper,  TexAndLottieWrapper } from './styled';
import Header from '../Header'
import Footer from '../Footer';



 function Main({children}) {
  
const [viewHeight, setView ] = useState('')
useEffect(()=>{
  setView(window.innerHeight +'px')
},[])
  return (
    <MainWrapper style={{height:viewHeight}}>
      <Header />
        <TalkWrapper>
          
            <TexAndLottieWrapper>

            {children}
                <img
                style={{
                  display: 'block',
                  marginLeft:"auto",
                  marginRight:'auto',
                  width:'40%'
                }}  
                src={location} 
                width={'35%'}
                alt="location"/>
            </TexAndLottieWrapper>
                
        </TalkWrapper>
        <Footer/>
    </MainWrapper>
    
  )
}

const WithLayout = (Component) =>{
  return(props)=>{

    return (
    <Main>
      <Component {...props} />
      </Main>
      )
  }
}
export default WithLayout