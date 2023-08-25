import './css/Design.css';
import shareicon  from'./icons/Design/shareicon.svg'
import americaslinkicon  from'./icons/Design/americaslinkicon.svg'



const Design = ()=>{
    return(
        <div className='design-main-container'>
            <div className="design-container">
                <div><li className='shareicon'><img  src={shareicon}/> "Design"</li></div>
                <input type="text"placeholder="Add People and groups"/>
                
                
                <div className='people-access-design'>
                <h4 className='shareicon'>People with access</h4>
                    <div className='userinormation-container'><li className='circleA'>A</li><ul><li className='list'>Akhil(you)</li><li className='email'>akhil001@gmail.com</li></ul><br/><li className='list'>Owner</li></div>
                </div>

                
                
                <div className='people-access-design'>
                <h4 className='shareicon'>General access</h4>
                    <div className='userinormation-container'><img  className='circleB' src={americaslinkicon}/><ul><li className='list'>Anyone with the link</li><li className='email'>Anyone on the internet with link can view</li></ul><br/><li className='list'>Viewer</li></div>
                </div>

                <div className='btn'>
                    <button className='btn-link'>Copy Link</button>
                    <button className='btn-done'>Done</button>
                </div>
            </div>
        </div>
    )
}
export default Design;