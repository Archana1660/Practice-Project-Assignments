import React from 'react';
import './headerStyle.css';


const Header = (props) => {

    return (
        <div className="row toggle-icon">
        <nav className="navbar navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <h5 className="ml-3">Your rides</h5>
        </nav>
        </div>
    );
}
export default Header;