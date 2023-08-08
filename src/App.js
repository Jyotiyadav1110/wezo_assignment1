import "./css/global.css";
import MenuDashboard from "./MenuDashboard";
import TreeMenu from "./TreeMenu";
import MainDashboard from "./MainDashboard";
export default function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <MenuDashboard/>
        <TreeMenu />
        <MainDashboard/>
      </div>
    </div>
  );
}
