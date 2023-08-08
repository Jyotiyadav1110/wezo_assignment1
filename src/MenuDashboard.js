// import "./global.css";
import "./css/MenuDashboard.css";
import EmailIcon from "@mui/icons-material/Email";
import CircleIcon from "@mui/icons-material/Circle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ScannerIcon from "@mui/icons-material/Scanner";
export default function LeftDashboard() {
  return (
    <div className="left-section-wrapper">
      <img src="https://via.placeholder.com/185x69" className="logo-image" />
      <div className="profile">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" className="profile-image" />
        <div className="profile-detail">
          <p className="user-name white-txt">Kasy</p>
          <p className="small-txt white-txt">kasy009@wezbomail.com</p>
        </div>
      </div>
      <div className="left-menu">
        <ul className="menu-list white-txt">
          <li className="menu-item active-menu-item">
            <EmailIcon className="menu-icons" />
            <p>Mail</p>
            <CircleIcon className="active-circle" />
          </li>
          <li className="menu-item">
            <ChatBubbleOutlineIcon className="menu-icons" />
            <p>Chat</p>
          </li>
          <li className="menu-item">
            <CalendarTodayOutlinedIcon className="menu-icons" />
            <p>Calender</p>
          </li>
          <li className="menu-item">
            <VideocamOutlinedIcon className="menu-icons" />
            <p>Meet</p>
          </li>
          <li className="menu-item">
            <InsertChartOutlinedSharpIcon className="menu-icons" />
            <p>Sheet</p>
          </li>
          <li className="menu-item">
            <FileCopyOutlinedIcon className="menu-icons"/>
            <p>Docs</p>
          </li>
          <li className="menu-item">
            <ContentCopyOutlinedIcon className="menu-icons"/>
            <p>Drive</p>
          </li>
          <li className="menu-item">
            <ScannerIcon className="menu-icons"/>
            <p>Slide</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
