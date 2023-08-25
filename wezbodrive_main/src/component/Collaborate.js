import Header from "./Header";
import Sidemenu from "./Sidemenu";
import Sidemenu1 from "./Sidemenu1";
// import './css/emptybin.css'
import './css/Collaborate.css'
import fileicon from './icons/fileicon.svg';
import Rectangle from './icons/Rectangle.svg';
import staricon from './icons/staricon.svg';
import dp from './icons/dp.svg';
import deleteicon from './icons/deleteicon.svg';
// import Sidemenu1 from './Sidemenu1'


import React, { useState } from "react";
import LeftDashboard from "./Sidemenu1";
const Collaborate =()=> {
    const list = [
        {
            name:"UI/UX",
            lastname : "Akhil",
            college : "Today",
            size:"130mb",
        },
        {
            name:"Frontend",
            lastname : "mishra",
            college : "2",
        },
        {
            name:"UI/UX",
            lastname : "Akhil",
            college : "Today",
            size:"130mb",
        },
        {
            name:"Frontend",
            lastname : "shah",
            college : "sdvp",
        },
        {
            name:"UI/UX",
            lastname : "Akhil",
            college : "Today",
            size:"130mb",
        },
        {
            name:"Frontend",
            lastname : "Akhil",
            college : "Today",
            size:"130mb",
        },
        {
            name:"UI/UX",
            lastname : "Akhil",
            college : "Today",
            size:"130mb",
        },
        {
            name:"Frontend",
            lastname : "Akhil",
            college : "Today",
            size:"130mb",
        },
        {
            name:"UI/UX",
            lastname : "Akhil",
            college : "Today",
            size:"130mb",
        },
        {
            name:"Frontend",
            lastname : "mishra",
            college : "2",
        },
        {
            name:"UI/UX",
            lastname : "Akhil",
            college : "Today",
            size:"130mb",
        },
        {
            name:"Frontend",
            lastname : "shah",
            college : "sdvp",
        },
        {
            name:"UI/UX",
            lastname : "Akhil",
            college : "Today",
            size:"130mb",
        },
        {
            name:"Frontend",
            lastname : "Akhil",
            college : "Today",
            size:"130mb",
        },
        {
            name:"UI/UX",
            lastname : "Akhil",
            college : "Today",
            size:"130mb",
        },
        {
            name:"Frontend",
            lastname : "Akhil",
            college : "Today",
            size:"130mb",
        },
    ]

    return(
        <div className="main-container">
        <LeftDashboard/>
        {/* <div className='line'> 
        </div> */}
        <Sidemenu/>
        {/* <div className='line'> 
        </div> */}
        <Header/>
        <div className="Collaborate-main-container">
            <div class="inner-section">
            <div class='col-12'>
                            <h2 className="collaborate-headiang">Collaborate</h2>
                        </div>
                    <div class="row rowheading">
                        
                        <div class="col-2">
                            Name
                        </div>
                        <div class="col-2">
                            Owner
                        </div>
                        <div class="col-2">
                            Opened On
                        </div>
                        <div class="col-2">
                            Size
                        </div>
                    </div>
                    <div class='col-8' className="linebelowrow"></div>

                    {
                          list.map((item)=>{
                                return(
                                <div class="container">
                                    <div class='row'>
                                    <div class="col-3 collaborate-table-container">
                                            <ul class=" items" style={{display:"flex",justifyContent:'space-between',gap:'28px'}}>
                                            
                                                <li><img src={Rectangle}/></li>
                                                <li ><img style={{backgroundColor:'transparent',width:'20px',height:'25px'}} src={fileicon}/></li>
                                                <li ><p style={{width:'35px'}}>{item.name}</p></li>
                                                <li ><img style={{paddingLeft:"100%"}} src={staricon}/></li>
                                            </ul>
                                            
                                        </div>
                                        <div class="col-3">
                                        <ul>
                                            <li>
                                                <img style={{width:'25px',height:'25px'}} src={dp} alt="alt"/>
                                                {item.name}
                                            </li>
                                        </ul>
                                        
                                        </div>
                                        <div class="col-2">
                                        <ul>
                                            <li>{item.lastname}</li>
                                        </ul>
                                        </div>
                                        <div class="col-2">
                                        <ul style={{display:"flex",justifyContent:'space-between',paddingRight:"50%"}}>
                                            <li> {item.college}</li>
                                            <li><img src={deleteicon}/></li>
                                        </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                                )
                          }) 
                        }
             </div>
        </div>
        </div>
    )
}
export default Collaborate;