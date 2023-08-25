


import React from 'react'
import "./css/MainDashboard.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

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

export default function RightOfInbox() {
  return (
    <div>
      <div className="Message-content Message-content-header1">

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

        {/* pagination section */}
        <div className="pagination-section">
        {/* <p className="numbers common-font">1</p>
        <p className="numbers common-font">2</p>
        <p className="numbers common-font">3</p>
        <p className="numbers common-font">4</p>
            <ChevronRightOutlinedIcon className="right-arrow"/> */}
        </div>
        </div>
    </div>
  )
}
