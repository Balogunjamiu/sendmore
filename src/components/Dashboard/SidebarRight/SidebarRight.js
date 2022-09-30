import React from 'react'
import { ArrivalText,
   ArrivalWrapper,Rating,
    SidebarRightWrapper,
     DriverInfoWrapper,
      DriverSection1, DriverSection2, 
      DriverSection3, DriverIcon,
       DriverText,
       CallandMessage,
        DriverPhone, 
        RatingStarIcon,
        CustomerCare,
        Segment,
         } from './styled';
         import Lottie from 'lottie-react';
        import Star from '../../../assets/images/star.svg';
       import CustomerCareLottie from '../../../assets/Lotties/call-center.json'
        import Message from '../../../assets/Lotties/texting.json'
        import Location from '../../../assets/images/location.svg'

import Icon from '../../../assets/images/avatar.svg'
import Button from '../../styledButton';
import SidebarTab from '../SidebarLeft/sidebarTabs/SidebarTab';
export default function SidebarRight() {
  return (
    <SidebarRightWrapper>
        <ArrivalWrapper>
          <ArrivalText>
            Arriving
          </ArrivalText>
          <ArrivalText>
              1hr
          </ArrivalText>
        </ArrivalWrapper>
        <DriverInfoWrapper>
            <DriverSection1>
                <DriverIcon src={Icon} /> 
            </DriverSection1>
            <DriverSection2>
                  <DriverText>
                      Balogun Abeeb @abeeb
                  </DriverText>
            </DriverSection2>
            <DriverSection3>
                <Rating>   
                  5.0
                  <RatingStarIcon src={Star}/>
                </Rating>
                <DriverPhone>
                  +222-333-444
                </DriverPhone>
            </DriverSection3>
        </DriverInfoWrapper>

            <CallandMessage>
                <Lottie animationData={Message} loop={true} />
            </CallandMessage>
                <Segment />              
              <CustomerCare>
              <Lottie animationData={CustomerCareLottie} loop={true} />
              </CustomerCare>
              <Button text={'Contact Us'} type={'primary'} style={{transform:'none'}}  />
              <SidebarTab name={'saved places'} image={Location} marginLeft={'0px'} />

    </SidebarRightWrapper>
  )
}
