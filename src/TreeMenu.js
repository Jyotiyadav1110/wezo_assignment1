// import "./global.css";
import "./css/TreeMenu.css";
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';

import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
export default function TreeMenu() {
  return (
    <div className="mid-sec-wrap">
      <ul className="white-menu-list">
        <li>
            <ModeOutlinedIcon className="icons"/>
          <p>Write</p>
        </li>
        <li>
            <AllInboxIcon className="icons"/>
          <p>Inbox <span className="hundred">100</span></p>
        </li>
        <li>
            <CreateNewFolderOutlinedIcon className="icons"/>
          <p>Create a Folder</p>
        </li>
        <li>
            <BookmarkBorderOutlinedIcon className="icons"/>
          <p>Bookmarks</p>
        </li>
        <li> 
            
            <WatchLaterOutlinedIcon className="icons"/>
          <p>Snoozed</p>
        </li>
        <li>
            <MailOutlineOutlinedIcon className="icons"/>
          <p>Sent</p>
        </li>

        <li>
            <DraftsOutlinedIcon className="icons"/>
          <p>Drafts</p>
        </li>
        <li>
          <details open className="less-data">
            <summary>Less</summary>
            <ul className="submenu-list">
                <li>
                    <LabelImportantOutlinedIcon className="icons"/>
                    <p>Important</p></li>
                <li>
                    <CalendarMonthOutlinedIcon className="icons"/>
                    <p>Scheduled</p></li>
                <li>
                    <MailOutlineOutlinedIcon className="icons"/>
                    <p>All Mail</p></li>
                <li>
                    <ErrorOutlinedIcon className="icons"/>
                    <p>Spam</p></li>
                <li>
                    <DeleteOutlineOutlinedIcon className="icons"/>
                    <p>Trash</p></li>
                </ul>
          </details>
          <p></p>
        </li>
      </ul>
    </div>
  );
}
