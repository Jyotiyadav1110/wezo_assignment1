// import './css/emptybin.css'
import './css/Collaborate.css'
import './css/bin.css'
import './css/deepclean.css'

import Header from "./Header";
import Sidemenu from "./Sidemenu";
import fileicon from './icons/fileicon.svg';
import Rectangle from './icons/Rectangle.svg';
import staricon from './icons/staricon.svg';
import dp from './icons/dp.svg';
import deleteicon from './icons/deleteicon.svg';
import readericon from './icons/readericon.svg';
import setingbackupicon from './icons/setingbackupicon.svg';
import lineicon from './icons/lineicon.svg' 
import freeupspaceicon from './icons/freeupspaceicon.svg'
// import deepclean from './icons/deepclean.svg'
import webzodrive from './icons/webzodrive.svg'
import deepcleanimg3 from './icons/deepcleanimg3.svg'
import LeftDashboard from './Sidemenu1';

const Deepclean = ()=>{
    return(
        <div>
            <div  className="main-container">
                <LeftDashboard/>
        {/* <div className='line'> </div> */}
                <Sidemenu/>
                {/* <div className='line'> 

                </div> */}
                <Header/>

                <div className='main-container-deeepclean'>
                <h3 className="headeindeeplcean">Deepclean</h3>

                <div className='top-heading-deep-clean'> Perform a complete cleaning<br/><p>Get more free space and remove all junk files</p></div>

                <div className='deepclean-icons'>
                    <div className='circle1' ><img className='img1deepclean' src={freeupspaceicon}/><br/><span className='clean1'>Free up <br/>more space</span></div>
                    <div className='circle'><img  className='img2' src={ webzodrive}/><br/><span className='clean2' style={{padding:'0px 0px 0px'}}>Turn up your Webzo Drive</span></div>
                    <div className='circle1'><img  className='img1deepclean' src={deepcleanimg3}/><img src={deepcleanimg3}/><br/><span className='clean1'>Customize <br/>what to clean</span></div>
                </div>
                <div><button className='deepcleanbtn'>Deepclean</button></div>
            </div>
            </div>

            
        </div>
    )
}

export default Deepclean;