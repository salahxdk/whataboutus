import { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import Logo from "../images/logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <div className="logocontainer">
          {" "}
          {/* added this div to group the logotext and logo img */}
          <img src={Logo} className="wabulogo" />
          <h1 className="navbar-logo">WABU</h1>
        </div>
        <div className="menu-icons">
          {" "}
          {/*Mobile Hamburger Icon Menu*/}
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href="/">
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
          <button>Subscribe to the Newsletter</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
