import React from 'react';
import './style.css';

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <a href="home.html" className="navbar-brand font-weight-bold">
          django
        </a>
        <div id="navResponsive">
          <ul className="navbar-nav ml-auto">
            {props.navLinks.map((items) => {
              return <li className="nav-item"><a className="nav-link" href={items.link}>{items.linkName}</a></li>
            }) }
          </ul>
        </div>
      </div>
    </nav>
    );
}

export default Header;