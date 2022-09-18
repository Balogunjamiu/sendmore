import React from 'react';
import Header from '../../LandingPage/Header';
import { DashboardMainWrapper } from './styled'
import useScreenSize from '../../../hooks/useScreenSize';


export default function DashboardMain({children}) {
const viewHeight = useScreenSize()
  return (
    <DashboardMainWrapper style={{height:viewHeight}}>
      <Header />
      {children}
    </DashboardMainWrapper>
  )
}