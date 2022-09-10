import React from 'react';
import Lottie from 'lottie-react';
import { TextWrapper } from '../../components/LandingPage/Main/styled';
import Button from '../../components/styledButton';
import deliveryman from '../../assets/Lotties/animated-delivery-man.json';

export default function HomePage() {
  return (
    <TextWrapper>
                <p style={{alignItem:'center'}}>
                    Easy and Affordable
                </p>
                    <Button 
                    text={'Start sending'}
                    type = {"secondary"}
                    style={{padding:'1rem',
                      borderRadius:"8px",
                      marginTop:'1rem'                  
                  }}
                    />
                <Lottie animationData={deliveryman} loop={true} />
              </TextWrapper>
  )
}
