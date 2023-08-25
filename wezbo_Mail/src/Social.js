

import React from 'react'
import Header1 from './Header1'
import Footerheader from './Footerheader'
import MainDashboard from './MainDashboard'
import MenuDashboard from './MenuDashboard'
import TreeMenu from './TreeMenu'
import './css/global.css'


function Social() {
  return (
    <div className='main-container-social'>
      {/* <MainDashboard/> */}
        <MenuDashboard/>
        <TreeMenu/>
        <Header1/>
        <div className='main-dash-wrapper main-dash-wrapper-header1 social-dashboard-container'>
        
        <Footerheader/>
        </div>
    </div>
  )
}

export default Social
