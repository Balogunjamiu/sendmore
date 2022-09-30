import React from 'react'
import { IconandText,
    SidebarArrowLeft,
     SidebarTabWrapper,
     Texts,
     Icons,
    
    } from './styled'
import arrow from '../../../../assets/images/arrow.svg';
export default function SidebarTab(props) {
  return (
    <SidebarTabWrapper>
        <IconandText   marginLeft={props.marginLeft}>
            <Icons src={props.image} />
        <Texts>
         {props.name}
        </Texts>
        </IconandText>

        <SidebarArrowLeft src={arrow} />
        
    </SidebarTabWrapper>
  )
}
