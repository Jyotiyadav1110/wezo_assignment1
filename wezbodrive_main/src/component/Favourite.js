

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
import lineicon from './icons/lineicon.svg';
import shareiconfav from './icons/Favouriteicon/shareiconfav.svg';
import rectangleiconfav from './icons/Favouriteicon/rectangleiconfav.svg';
import starticonfavourite from './icons/Favouriteicon/starticonfavourite.svg';
// import AframeFavourite from './icons/Favouriteicon/AframeFavourite.svg';
// import PframeFavourite from './icons/Favouriteicon/PframeFavourite.svg';
import APiconfav from './icons/Favouriteicon/APiconfav.svg';
import Bin from './Bin'
import './css/favourite.css'

import Header from "./Header"
import Sidemenu from "./Sidemenu"
import LeftDashboard from './Sidemenu1';




const favouritedata = [
    {
    card1 :'fav1',
    card2 :'fav2',
    card3 :'fav3',
    card4 :'fav4',
},
{
    card1 :'fav1',
    card2 :'fav2',
    card3 :'fav3',
    card4 :'fav4',
},
{
    card1 :'fav1',
    card2 :'fav2',
    card3 :'fav3',
    card4 :'fav4',
},
{
    card1 :'fav1',
    card2 :'fav2',
    card3 :'fav3',
    card4 :'fav4',
},
{
    card1 :'fav1',
    card2 :'fav2',
    card3 :'fav3',
    card4 :'fav4',
},
{
    card1 :'fav1',
    card2 :'fav2',
    card3 :'fav3',
    card4 :'fav4',
},
]
const Favourite = ()=>{
    return(
        <div className="main-container1">
             <div  className="main-container">
                <LeftDashboard/>
        {/* <div className='line'> </div> */}
            <Sidemenu/>
            {/* <div className='line'> </div> */}
            <Header/>

            
<div>
    <div className="Bin1 ">
                <div className='emptybin1 favheading'>Favourite</div>
                {/* <div><button>Empty Bin</button></div> */}
            </div>
            {/* <h3>Today</h3> */}
            <div className="main-container-reader favcontainer">
                {favouritedata.slice(0, 6).map((item)=>{
                    return(
                        <div className="container-reader">
                            <div className="container-reader-header headerfav">
                                <li><img src={rectangleiconfav} alt="alt"/>
                                <img src={starticonfavourite} alt="alt"/></li>
                                <li><img src={'APiconfav'}/></li>
                            </div>
                            <div className="container-reader-img">
                                <img src={readericon} alt="alt"/><br/><spam>Official agreement.pdf</spam>
                            </div>
                            <div className="line-img">
                                <img src={lineicon}/><br/>
                                <span style={{display:'flex', gap:'60%',listStyle:'none',color:"white",padding:'0px 20px 0px 30px'}} ><li>Fileszip</li> <li>20mb</li> </span>
                                <div class="DP1 dpsharingicon">
                                    <li><img class="removedpcorner remocedocover1" src="/static/media/dp.9a83991dc9f8b58e485946ba10c785bf.svg" alt="alt"/>
                                    <b style={{color:'white'}}>Akhil</b></li>
                                    <li><img src={shareiconfav} alt='alt'/></li>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div><br/><spam className="readmore">more...</spam>
            </div>
            
        </div>
            
            
        </div>
    )
}
export default Favourite;