import React from 'react';
import { DashboardMainWrapper, DashboardMiddleContainer, DashboardLeftContainer, DashboardRightContainer } from './styled'
import useScreenSize from '../../../hooks/useScreenSize';
import SidebarLeft from '../SidebarLeft/SidebarLeft';
import SidebarRight from '../SidebarRight/SidebarRight';

export default function DashboardMain({children}) {
const viewHeight = useScreenSize()
  return (
    <DashboardMainWrapper style={{height:viewHeight}}>
      <DashboardLeftContainer>
        <SidebarLeft/>
      </DashboardLeftContainer>
      <DashboardMiddleContainer>
        {children}
      </DashboardMiddleContainer>
      <DashboardRightContainer>
        <SidebarRight />     
      </DashboardRightContainer>
    </DashboardMainWrapper>
  )
}