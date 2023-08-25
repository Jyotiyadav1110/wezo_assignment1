import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import TreeMenu from "./TreeMenu";
import MenuDashboard from "./MenuDashboard";
import MainDashboard from "./MainDashboard";
import Unread from "./Unread";
import Header1 from "./Header1";
import Social from "./Social";
import Sent from "./Sent";
import Footerheader from "./Footerheader";
import Write from "./Write";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
   
    
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={ <Header1 />}> */}
        {/* <Route path="/" element={ <Social />}> */}
        {/* Social */}
                <Route path="/" element={ <Write />}>

          {/* <Route index element={<TreeMenu />} /> */}
          {/* <Route path="menudashboard" element={<MenuDashboard/>} /> */}
          {/* <Route path="maindashboard" element={<MainDashboard />} /> */}
          {/* <Route path="unread" element={<Unread />} /> */}

          
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
