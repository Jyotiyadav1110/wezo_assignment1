import React from 'react'
// import ion_folder from './image/ion_folder-open.svg';
// import world from './image/bi_globe-americas.svg';
import world from './icons/space/world.svg';
import fileicon from './icons/space/fileicon.svg';
import './css/RightSidebar.css';


function rightSidebar() {
  return (
    <div className='right-sidebar'>
      <div className='upper-section'>
        <h2>Space</h2>
        <div className='graph'>
          <div className='half-circle-graph'><span className='internal-data'>10 gb</span></div>
          
          <p className='total-storage'><span>of 20 gb</span></p>
              <div className='labels'>
                  <div className='spaceused-line hrline1'></div>
                  <div className='spaceused-line'>Space Used</div>
              </div>
              <div  className='labels'>
                  <div className='spaceused-line hrline2'></div>
                  <div className='spaceused-line'>Space Available</div>
              </div>
        </div>
        <p className='collaborate-heading'>
          <img src={fileicon} />
          <h2>Collaborate</h2>
        </p>
        <p className='cont'>Who has access</p>
        <div className='world-btn-style'>
          <div className='manage-access'>
            <div className='letter-label labelA_world'>A</div>
            <div className='line-space labelA_world'></div>
            <div className='labelA_world'><img src={world} /></div>
          </div>
          <br/>
          <button className='cont button-style'>manage access</button>
        </div>
      </div>
      
      <div className='lower-section'>
        <p className='bold-txt'>Folder details</p>
        <p>Type</p>
        <p>Wezbo Drive Folder</p>
        <p className='bold-txt'>Location</p>
        <p className='highlight-menu'>
          {/* <img src={file_icon} />  */}
          My Drive
        </p>
        <p className='bold-txt'>Owner</p>
        <p>me</p>
        <p className='bold-txt'>Modified</p>
        <p>Jan 13, 2023 by me</p>
        <p className='bold-txt'>Created</p>
        <p>Jan 14, 2023</p>
        <p className='bold-txt'>Download permissions</p>
        <p>Viewers can download</p>
      </div>
    </div>
  )
}

export default rightSidebar