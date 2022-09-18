import React from 'react'
import MainDashboard from '../components/Dashboard/DashboardMain/DashboardMain'

export default function WithDashboardLayout(Component) {
  return(props)=>{
    return(
      <MainDashboard>
        <Component {...props} />
      </MainDashboard>
    )
  }
}
