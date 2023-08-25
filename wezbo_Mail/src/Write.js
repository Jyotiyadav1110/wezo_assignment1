import React from 'react'
import './css/Write.css';


function Write() {
  return (
    <div className='main-container-write'>
        <div className='write-container'>
            <h3>To</h3>
            <p>
                <input type='text'              placeholder='uses@wezbomail.com'/>
                <img src='icon'/>
            </p>
        </div>
         <div className='write-container'>
            <h3>Cc</h3>
            <p>
                <input type='text'              placeholder='uses@wezbomail.com'/>
                <img src='icon'/>
            </p>
        </div>
        <div className='write-container'>
            <img src='i1' alt='img1'/>
            <img src='i1'/>
            <img src='i1'/>
            <img src='i1'/>
            <img src='i1'/>
            <img src='i1'/>
            <img src='i1'/>
            <img src='i1'/>
            <img src='i1'/>
            <img src='i1'/>
        </div>
    </div>
  )
}

export default Write