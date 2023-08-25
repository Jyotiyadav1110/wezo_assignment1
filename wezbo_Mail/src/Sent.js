


import React from 'react'
import MenuDashboard from './MenuDashboard'
import Header1 from './Header1'
import Footerheader from './Footerheader'
import RightOfInbox from './RightOfInbox'
import TreeMenu from './TreeMenu'
import './css/global.css';

function Sent() {
  return (
    <>
    <div className='main-dash-container'>
        <MenuDashboard/>
        <TreeMenu/>
        <Header1/>
    
        <p className='footheader'><Footerheader/></p>
    </div>
    
    </>
  )
}

export default Sent
