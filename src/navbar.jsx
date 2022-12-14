import { NavLink } from "react-router-dom";
import logo from "./assets/logo.svg.png";
import "./navbar.css";
const Nav = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo-img" className="logo-img" />
          <h1>COCKTAILS</h1>
        </div>
        <nav>
          <ul>
            <li className="nav-link">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/about">ABOUT</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
