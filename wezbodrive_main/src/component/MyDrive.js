import Header from "./Header";
import Sidemenu from "./Sidemenu";
import "./css/Mydrive.css";
import iconfolder from "./icons/Mydrive/iconfolder.svg";
import horizontalline from "./icons/Mydrive/horizontalline.svg";
import LeftDashboard from "./Sidemenu1";
import Rectangle from "./icons/Rectangle.svg";
import staricon from "./icons/Mydrive/staricon.svg";
import dp from "./icons/Mydrive/dp.svg";
import deleteicon from "./icons/Mydrive/deleteicon.svg";
import file_allfiles from "./icons/Mydrive/allfiles.svg";
import fileicon from './icons/Mydrive/file_allfiles.svg'
import blackfile from './icons/Mydrive/blackfile.svg'
import blackline from './icons/Mydrive/blackline.svg'
import blackstar from './icons/Mydrive/blackstar.svg'

const mydrivedata = [
  {
    files: "10",
    design: "Design",
  },
  {
    files: "39",
    design: "Webzomail",
  },
  {
    files: "64",
    design: "Documents",
  },

  {
    Name: "illustration",
    Location: "MyDrive",
    Owner: "Akhil",
    Openedby: "today",
    Size: "1GB",
  },
  {
    Name: "illustration",
    Location: "MyDrive",
    Owner: "Akhil",
    Openedby: "today",
    Size: "1GB",
  },
  {
    Name: "illustration",
    Location: "MyDrive",
    Owner: "Akhil",
    Openedby: "today",
    Size: "1GB",
  },
  {
    Name: "illustration",
    Location: "MyDrive",
    Owner: "Akhil",
    Openedby: "today",
    Size: "1GB",
  },
];

const list = [
  {
    name: "UI/UX",
    lastname: "Akhil",
    college: "Today",
    size: "130mb",
  },
  {
    name: "Frontend",
    lastname: "mishra",
    college: "2",
  },
  {
    name: "Frontend",
    lastname: "mishra",
    college: "2",
  },
];
const MyDrive = () => {
  return (
    <div>
      <div className="main-container">
        <LeftDashboard />
        {/* <div className='line'>  </div> */}
        <Sidemenu />
        {/* <div className='line'></div> */}
        <Header />

        <div className="container-mydrive">
          <ul className="mydriveheading">
            <li>Storage</li>
            <li className="createnewfolder">+ Create new folder</li>
          </ul>

          <div className="mydrive-inner-container">
            <div className="mydrive-container1">
              {mydrivedata.slice(0, 3).map((item) => {
                return (
                  <div className="mydrive-container">
                    <div className="belowheading">
                      <li>
                        <img src={iconfolder} />
                        <br />
                        <li className="files">10 files</li>
                      </li>
                      <li>
                        <li className="designline">Design</li>
                        <br />
                        <img src={horizontalline} />
                      </li>
                      <p>{item.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <br />
            <br />
            {/* <div className="main-container"> */}
            <div className="allfiles">
              <li>All files</li>
              <li>
                <img src={file_allfiles} />
              </li>
            </div>
            <div className="container-mydrive-allfile-section">
              <div class="list-section">
                <div class="row rowheading">
                  <div class="col-2">Name</div>
                  <div class="col-2">Location</div>
                  <div class="col-2">Owner</div>
                  <div class="col-2">Opened by You</div>
                  <div class="col-2">Size</div>
                </div>
                <div class="col-8" className="linebelowrow"></div>

                {list.map((item) => {
                  return (
                    <div class="">
                      <div class="row">
                        <div class="col-4 collaborate-table-container">
                          <ul
                            class=" items"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: "28px",
                            }}
                          >
                            <li>
                              <img src={Rectangle} />
                            </li>
                            <li>
                              <img
                                style={{
                                  backgroundColor: "transparent",
                                  width: "20px",
                                  height: "25px",
                                }}
                                src={"fileicon"}
                              />
                            </li>
                            <li>
                              <p style={{ width: "35px" }}>{item.name}</p>
                            </li>
                            <li>
                              <img
                                style={{ paddingLeft: "100%" }}
                                src={staricon}
                              />
                            </li>
                          </ul>
                        </div>
                        <div class="col-2">
                          <ul>
                            <li>
                              <img
                                style={{ width: "25px", height: "25px" }}
                                src={dp}
                                alt="alt"
                              />
                              {item.name}
                            </li>
                          </ul>
                        </div>
                        <div class="col-2">
                          <ul>
                            <li>{"item.lastname"}</li>
                          </ul>
                        </div>
                        <div class="col-2">
                          <ul
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              paddingRight: "50%",
                            }}
                          >
                            <li> {item.college}</li>
                          </ul>
                        </div>

                        <div class="col-2">
                          <ul
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              paddingRight: "50%",
                            }}
                          >
                            <li> {item.college}</li>
                            <li>
                              <img src={deleteicon} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="main-allfiles-container">
            <h4 className="recentfile-container-heading">Recent files <img className="fileicon" src={fileicon}/></h4>
            <div className="main-allfiles-container-map">
              {mydrivedata.slice(0, 3).map((item) => {
                  return (
                    <div className="allfiles-container">
                        <p><img src={blackstar}/></p>
                        <p><img src={blackfile}/></p>
                        <p>Official assignment.pdf</p>
                        <img src={blackline}/>
                        <p>Filesize</p>
                        <p>20 mb</p>
                    </div>
                )
                })}
              </div>
            </div>
          </div>

          
        </div>
    </div>
   </div>
    // </div>
  );
};

export default MyDrive;
