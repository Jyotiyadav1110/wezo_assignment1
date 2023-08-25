import Header from "./Header";
import Sidemenu from "./Sidemenu";

// import './css/emptybin.css'
import './css/Collaborate.css'
import './css/bin.css'
import './css/Teams.css'
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
import whitestar from './icons/Teams/whitestar.svg';

import Bin from './Bin'
import './css/favourite.css'
import LeftDashboard from "./Sidemenu1";

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

const Teams = () =>{
    return(
        <div className="main-container1">
          <div  className="main-container">
            <LeftDashboard/>
        {/* <div className='line'>  </div> */}
            <Sidemenu/>
            {/* <div className='line'> </div> */}
            <Header/>

            <div className="Bin1 ">
                <div className='emptybin1 favheading'>Teams</div>
                {/* <div><button>Empty Bin</button></div> */}
            </div>

              <div class ="main-container-reader favcontainer row">
                {favouritedata.slice(0, 3).map((item)=>{
                    return(
                        <div class ="container-reader-team" >
                            <div className="container-reader-header headerfav  ">
                                <li><img src={whitestar} alt="alt"/></li>
                                <li><img src={whitestar}/></li>
                            </div>
                            <div className="container-reader-img">
                                <img src={readericon} alt="alt"/><br/><spam>Official agreement.pdf</spam>
                            </div>
                        </div>
                    )
                })}
        </div><br/><spam className="readmore">more...</spam>
        </div>

      
        </div>
    // </div>
    )
}

export default Teams;