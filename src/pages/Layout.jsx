import { Outlet, Link } from "react-router-dom";
import ListProjects from "../components/ListProjects";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects"><ListProjects></ListProjects></Link>
          </li>
          <li>
            <Link to="/Todos">Todos</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;