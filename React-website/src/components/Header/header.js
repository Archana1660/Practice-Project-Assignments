import React from "react";
import "./headerStyle.css";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <a href="home.html">
          <img className="brand-logo" src={props.headerData.logo} alt={props.headerData.alt}/>
        </a>
        <div>
        <ul className="navbar-nav ml-auto">
          {props.headerData.navLinks.map((item, index) => {
            return (<li className="nav-item pl-5">{item}</li>)
          })}
        </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
