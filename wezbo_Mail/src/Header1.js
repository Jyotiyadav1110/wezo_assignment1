// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CropSquareIcon from '@mui/icons-material/CropSquare';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import "./css/MainDashboard.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Ellipse10 from './img/Ellipse10.jpg';
import Ellipse11 from './img/Ellipse11.jpg';
import Ellipse12 from './img/Ellipse12.jpg';
import Ellipse13 from './img/Ellipse13.jpg';
import Ellipse14 from './img/Ellipse14.jpg';
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Unread from "./Unread";

import './css/global.css'

import React from 'react'
import RightOfInbox from './RightOfInbox';



function Header1() {
  return (
    <div className="main-dash-wrapper main-dash-wrapper-header1">
      <div className="header-sec">
        <div className="heading-cont">
          <h1 className="reset-txt"> Important</h1>
          <p className="small-txt"></p>
        </div>
      </div>
      <div className="horizontal-menu">
        <ul className="horizontal-list reset-txt common-font">
            <SearchOutlinedIcon className="search-icon" />
            <input type="text" placeholder="Search" className="searchinput"/>
        </ul>
            <SettingsOutlinedIcon className="setting-icon" />
      </div>
      <div className="border-line">
        <p><CropSquareIcon/></p>
        <p><ArrowDropDownIcon/></p>
        <p><RefreshIcon/></p>
        <p><MoreVertIcon/></p>
      </div>

      {/* <div className='storage-header'>
        <p>0 GB of 30 GB used</p>
        <p>Powered by WEZBO</p>
        <p>
            <p>Last account activity: 8 hours ago </p>
            <p>Details</p>
        </p>
      </div> */}
    </div>
  )
}

export default Header1
