
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Collaborate</Link>
          </li>
          <li>
            <Link to="/deepclean">Deepclean</Link>
          </li>
          <li>
            <Link to="/bin">Bin</Link>
          </li>
          <li>
            <Link to="/emptybin">Emptybin</Link>
          </li>
        </ul>
      </nav> */}
      <Outlet />
    </>
  )
};

export default Layout;