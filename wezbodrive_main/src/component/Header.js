
import search from './icons/search.svg'
import dp from './icons/dp.svg'
import SettingsIcon from '@mui/icons-material/Settings';
// import Backgroundcolortheme from './Backgroundcolortheme';
function Header(){
    return(
        <div className='top-container2'>
          <div className='searchbar'>
              <img src={search} alt='alt'/>
              <div style={{width:"260px"}}>Search by folder of file name</div>
            </div>

            <div className='setting-icon'>
              {/* <img className='removedpcorner' src={dp} alt='alt'/>
              <p>Akhil</p> */}
              <SettingsIcon style={{fontSize:"30px"}}/>
            </div>
         </div>
    )
}
export default Header;