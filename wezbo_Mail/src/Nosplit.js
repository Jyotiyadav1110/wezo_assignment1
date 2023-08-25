
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
// import Ellipse15 from './img/Ellipse15.jpg';

const List = [
  {
    name:"demo",
    lname:"ldemo",
    add:"demoadd",
  },
  {
    name:"demo",
    lname:"ldemo",
    add:"demoadd",
  },
  {
    name:"demo",
    lname:"ldemo",
    add:"demoadd",
  },
  {
    name:"demo",
    lname:"ldemo",
    add:"demoadd",
  },
  {
    name:"demo",
    lname:"ldemo",
    add:"demoadd",
  },
  {
    name:"demo",
    lname:"ldemo",
    add:"demoadd",
  },
  {
    name:"demo",
    lname:"ldemo",
    add:"demoadd",
  },
  {
    name:"demo",
    lname:"ldemo",
    add:"demoadd",
  },
  {
    name:"demo",
    lname:"ldemo",
    add:"demoadd",
  },
  {
    name:"demo",
    lname:"ldemo",
    add:"demoadd",
  },
  {
    name:"demo",
    lname:"ldemo",
    add:"demoadd",
  },
  {
    name:"demo",
    lname:"ldemo",
    add:"demoadd",
  },
]

const NoSplit = ()=>{

    const UnreadFunction = ()=>{
        console.log("unread msg");
        <Unread/>
        // <Link to="unread"></Link>
      }
      return (
        <div className="main-dash-wrapper">
          <div className="header-sec">
            <div className="heading-cont">
              <h1 className="reset-txt"> All Mails</h1>
              <p className="small-txt">1000 messages</p>
            </div>
            <div className="search">
              <SearchOutlinedIcon className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="horizontal-menu">
            <ul className="horizontal-list reset-txt common-font">
              <li className="list-item active-list-item active-list-item1">All</li>
              <li className="list-item active-list-item active-list-item2" onClick={()=>UnreadFunction()}>Unread</li>
              
            </ul>
            <SettingsOutlinedIcon className="setting-icon" />
          </div>
          <div className="Message-content">
    
            {/* using map for list */}
            {
              List.slice(0,10).map((item)=>{
                return(
                  <div className="msg-box">
              <p className="time-text common-font">10:30 AM</p>
             <p> <CheckBoxOutlineBlankOutlinedIcon className="msg-box-icon" /></p>
              <p><BookmarkBorderOutlinedIcon className="msg-box-icon" /></p>
              {/* <img src={Ellipse10} className="user-profile"/> */}
    
              <div className="name-box">
                <p className="common-font">Coursera</p>
                <p className="common-font">
                  {/* <strong>Lorem Ipsum</strong> */}
                </p>
              </div>
              <p className="common-font message">
                Lörem ipsum pantiv ede. Sehira sutol, sedan ber. Oledes sot. Presk
                lanement i tenade.Lörem ipsum pantiv ede. Sehira sutol, sedan ber.{" "}
                <br />
                Oledes sot. Presk lanement i tenade.Lörem ipsum pantiv ede. Sehira
                sutol, sedan ber. <br />
                Oledes sot. Presk lanement i tenade.Lörem ipsum pantiv ede. Sehira
                sutol, sedan ber. <br />
                Oledes sot. Presk lanement i tenade.
              </p>
              <AttachEmailOutlinedIcon className="msg-box-icon" />
            </div>
                )
              })
            }
            
            
            <div className="msg-box">
              <p className="time-text common-font">10:30 AM</p>
              <CheckBoxOutlineBlankOutlinedIcon className="msg-box-icon" />
              <BookmarkBorderOutlinedIcon className="msg-box-icon" />
              {/* <img src={Ellipse14} className="user-profile"/> */}
    
              <div className="name-box">
                <p className="common-font">Coursera</p>
                <p className="common-font">
                  {/* <strong>Lorem Ipsum</strong> */}
                </p>
              </div>
              <p className="common-font message">
                Lörem ipsum pantiv ede. Sehira sutol, sedan ber. Oledes sot. Presk
                lanement i tenade.Lörem ipsum pantiv ede. Sehira sutol, sedan ber.{" "}
                <br />
                Oledes sot. Presk lanement i tenade.Lörem ipsum pantiv ede. Sehira
                sutol, sedan ber. <br />
                Oledes sot. Presk lanement i tenade.Lörem ipsum pantiv ede. Sehira
                sutol, sedan ber. <br />
                Oledes sot. Presk lanement i tenade.
              </p>
              {/* <AttachEmailOutlinedIcon className="msg-box-icon" /> */}
            </div>
            {/* pagination section */}
            <div className="pagination-section">
              {/* <p className="numbers common-font">1</p>
              <p className="numbers common-font">2</p>
              <p className="numbers common-font">3</p>
              <p className="numbers common-font">4</p>
                <ChevronRightOutlinedIcon className="right-arrow"/> */}
                
            </div>
          </div>
          <p><Footer/></p>
        </div>
      );
}
export default NoSplit;