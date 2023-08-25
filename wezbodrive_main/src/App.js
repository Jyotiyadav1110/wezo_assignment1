
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Bin from './component/Bin';
import Collaborate from './component/Collaborate';
import Deepclean from './component/Deepclean';
// import Backgroundcolortheme from './component/Backgroundcolortheme';
// import Collaborate from './component/Collaborate';
import Emptybin from './component/Emptybin';
import Favourite from './component/Favourite';
import NoPage from "./component/NoPage";
import Layout from "./component/Layout";

import { useState } from "react";
import "./component/css/backgroundcolortheme.css";
import MyDrive from "./component/MyDrive";
import Teams from "./component/Teams";
// import Setting from "./component/Setting";
import Design from "./component/Design";
import BillingAddress from "./component/BillingAddress";
import RightSidebar from "./component/RightSidebar";
import Setting from "./component/Setting";


const App = () => {

  const [backgroundcolor, setbackgroundcolor] = useState(null);
  const [color, setColor] = useState(null);

    return (
      <dv>
{/* start background color chanfe theme */}
      {/* <input
        id="color1"
        style={{
          backgroundColor: "white",
          border: "none",
          borderRadius: "2px"
        }}
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        id="color2"
        type='color'
        value={color}
        onChange={(e) => setbackgroundcolor(e.target.value)}
      /> */}
      {/* End background color chanfe theme */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path ='collaborate' element = {<Collaborate />} />
            <Route path="deepclean" element={<Deepclean />} />
            <Route path="bin" element={<Bin />} />
            <Route path="emptybin" element={<Emptybin />} />
            <Route path="favourite" element={<Favourite />} />
            <Route path="mydrive" element={<MyDrive />} />
            <Route path="setting" element={<Setting />} />
            <Route path="teams" element={<Teams />} />
            <Route path="design" element={<Design />} />
            <Route path="billingAddress" element={<BillingAddress />} />
            <Route path="rightSidebar" element={<RightSidebar />} />
            <Route path="*" element={<NoPage />} />
            
            
          </Route>
        </Routes>
      </BrowserRouter>
      </dv>

    );
}

export default App;
