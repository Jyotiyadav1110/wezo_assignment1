import dustbin from './icons/dustbin.svg';
import Sidemenu from './Sidemenu';
import Header from './Header';
import LeftDashboard from './Sidemenu1';

function Emptybin() {
  return (
    <div className="main-container">
      <LeftDashboard/>
        {/* <div className='line'></div> */}
      <Sidemenu/>
        {/* <div className='line'></div> */}
            <Header/>

          <div className='bin'>
              <p className='emptybin'>BIN</p>
              <button className='emptybin'>Empty Bin</button>
          </div>

          <div className='deletelogo'>
            <img src={dustbin} alt='alt' style={{Color:'#808080'}}/>
            <p style={{color:"#fff"}}>Items in bin are deleted forever after 30 days <br/>Emptybin</p>
            {/* <p className='emptybin'>Empty Bin</p> */}
          </div>
        
      
    </div>
  );
}

export default Emptybin;
