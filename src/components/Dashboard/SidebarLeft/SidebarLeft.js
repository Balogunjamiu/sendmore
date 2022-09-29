import React, { useState } from 'react'
import { SidebarLeftWrapper, 
  SidebarLeftContact, 
  SidebarLeftContactAvatar,
  SidebarLeftContactText,
  SidebarLeftContactPhone, 
  Segment,
  SidebarLeftMiddleWrapper,
  SidebarLeftIcon1,
  SidebarLeftIcon1Content, 
  SidebarLeftIcon2,
  SidebarLeftIcon2Content,
  SidebarLeftIcon3,
  SidebarLeftIcon3Content
} from './styled'
import Avatar from '../../../assets/images/avatar.svg'
import Star from '../../../assets/images/star.svg';
import Bike from '../../../assets/images/bike.svg';
import Car from '../../../assets/images/car.svg';
export default function SidebarLeft() {

  const [click, setClicked] = useState(false);
  const [clickedItem, setClickedItem] = useState(false)
  
  return (
    <SidebarLeftWrapper>
    <SidebarLeftContact>
    <SidebarLeftContactAvatar width={'40%'} src={Avatar}/>
    <SidebarLeftContactText>
      Balogun jamiu
    <SidebarLeftContactPhone>
      +123-333-444
          </SidebarLeftContactPhone>
    </SidebarLeftContactText>
    </SidebarLeftContact>
    <Segment />

    <SidebarLeftMiddleWrapper>
      <SidebarLeftIcon1>
          <SidebarLeftIcon1Content clicked={click} onClick={()=> setClicked(!click)} src={Star}  width={'50%'} />
      </SidebarLeftIcon1>
      <SidebarLeftIcon2>
          <SidebarLeftIcon2Content clicked={clickedItem} onClick={()=> setClickedItem(!clickedItem)} src={Bike} width={'50%'} />
      </SidebarLeftIcon2>
      <SidebarLeftIcon3>
          <SidebarLeftIcon3Content src={Car} width={'50%'} />
      </SidebarLeftIcon3>
    </SidebarLeftMiddleWrapper>
    <Segment />

    </SidebarLeftWrapper>
  )
}
