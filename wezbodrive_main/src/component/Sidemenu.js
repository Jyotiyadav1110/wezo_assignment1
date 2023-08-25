import Mydrive from './icons/Mydrive.svg';
import collaborate from './icons/colaborate.svg';
import favourite from './icons/favrouite.svg';
import bin from './icons/bin.svg';
import settings from './icons/settings.svg';
import teams from './icons/teams.svg';
import logo from './icons/logo-removebg.png';
import './css/emptybin.css';
import { Outlet, Link } from "react-router-dom";
import Backgroundcolortheme from './Backgroundcolortheme';
import './css/sidebarmenu.css'

function Sidemenu(){
    return(
        <div className='container1 container-sidebarmenu-bg'>
        <div className='logo-image'>
        {/* <img src={logo} alt="logo"/> */}
        </div> 
        <div className='leftside-container'>
          <img src={Mydrive} alt="alt"/>
            <Link to="/mydrive"><p className='sidemenu-content-colorchange'>My Drive</p></Link>

        </div>

        <div className='leftside-container'>
          <img src={collaborate} alt="alt"/>
          <Link to="/collaborate"><p className='sidemenu-content-colorchange'>Collaborate</p></Link>
        </div>
        
        <div className='leftside-container'> 
          <img src={favourite} alt="alt"/>
          <Link to="/favourite"><p className='sidemenu-content-colorchange'>Favourite</p></Link>
        </div>

        <div className='leftside-container'>
          <img src={bin} alt="alt" />
          <Link to="/bin"><p className='sidemenu-content-colorchange'>Bin</p></Link>
        </div>

        <div className='leftside-container'>
          <img src={settings} alt="alt"/>
          <Link to="/setting"><p className='sidemenu-content-colorchange'>Settings</p></Link>
        </div>

        <div className='leftside-container'>
          <img src={teams} alt="alt"/>
          <Link to="/teams"><p className='sidemenu-content-colorchange'>Teams</p></Link>
        </div>
        
        <div className='leftside-container'>
          <img src={collaborate} alt="alt"/>
          <Link to="/deepclean"><p className='sidemenu-content-colorchange'>Deepclean</p></Link>
        </div>

        <div className='leftside-container'>
          <img src={teams} alt="alt"/>
          <Link to="/emptybin"><p className='sidemenu-content-colorchange'>Emptybin</p></Link>
        </div>

        <div className='leftside-container'>
          <img src={teams} alt="alt"/>
          <Link to="/design"><p className='sidemenu-content-colorchange'>Design</p></Link>
        </div>
        <div className='leftside-container'>
          <img src={teams} alt="alt"/>
          <Link to="/billingAddress"><p className='sidemenu-content-colorchange'>BillingAddress</p></Link>
        </div>
        
        <div className='leftside-container'>
          <img src={teams} alt="alt"/>
          <Link to="/rightSidebar"><p className='sidemenu-content-colorchange'>rightsidemenu</p></Link>
        </div>

        <Outlet />
        </div>
    )
}
export default Sidemenu;