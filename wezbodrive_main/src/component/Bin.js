import Header from "./Header";
import Sidemenu from "./Sidemenu";
// import './css/emptybin.css'
import './css/Collaborate.css'
import './css/bin.css'
import fileicon from './icons/fileicon.svg';
import Rectangle from './icons/Rectangle.svg';
import staricon from './icons/staricon.svg';
import dp from './icons/dp.svg';
import deleteicon from './icons/deleteicon.svg';
import readericon from './icons/readericon.svg';
import setingbackupicon from './icons/setingbackupicon.svg';
import lineicon from './icons/lineicon.svg'

import React, { useState } from "react";
import LeftDashboard from "./Sidemenu1";

const Bin = ()=>{

    const bindata = [
        {
            name:"UI/UX",
            lastname : "Akhil",
            img : "",
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
        <div className="main-container1">
         <div  className="main-container">
                <LeftDashboard/>
            <Sidemenu/>
            <Header/>
    {/* Main Content */}
            <div className="bin-content">
                <div className="Bin1 ">
                    <div className='emptybin1 favheading'>BIN</div>
                    <div><button>Empty Bin</button></div>
                </div>
                {/* <div> */}
                {/* <h3>Today</h3> */}
                <div className="main-container-reader favcontainer">
                    {bindata.slice(0, 8).map((item)=>{
                        return(
                            <div className="container-reader">
                                <div className="container-reader-header">
                                    <img src={setingbackupicon} alt="alt"/>
                                    <img src={Rectangle} alt="alt"/>
                                </div>
                                <div className="container-reader-img">
                                    <img src={readericon} alt="alt"/><br/><spam>Official agreement.pdf</spam>
                                </div>
                                <div className="line-img">
                                    <img src={lineicon}/><br/>
                                    <spam>Fileszip</spam><br/>
                                    <spam>20mb </spam>
                                </div>
                            </div>
                        )
                    })}
                </div><br/><spam className="readmore">more...</spam>
            </div>

        </div>
           
            
        </div>

            // </div>
    )
}

export default Bin;