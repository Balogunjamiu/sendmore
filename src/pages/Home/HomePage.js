import React from 'react';
import Lottie from 'lottie-react';
import { TextWrapper } from '../../components/LandingPage/Main/styled';
import Button from '../../components/styledButton';
import deliveryman from '../../assets/Lotties/animated-delivery-man.json';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

  const navigate = useNavigate()
  return (
    <TextWrapper>
                <p style={{alignItem:'center'}}>
                    Easy and Affordable
                </p>
                    <Button 
                    text={'Start sending'}
                    type = {"secondary"}
                    onClick={()=> navigate('/signup') }
                    style={{padding:'1rem',
                      borderRadius:"8px",
                      marginTop:'1rem'                  
                  }}
                    />
                <Lottie animationData={deliveryman} loop={true} />
              </TextWrapper>
  )
}
