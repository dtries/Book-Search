import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav>
        <div className="nav-wrapper">
        <Link to="/" className="brand left">Book Widget</Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li className="nav-selector">
              <Link to="/" 
                className={window.location.pathname === "/" || window.location.pathname === "/search" ? 
                "nav-term active" 
                : "nav-term"}>
                Search
              </Link>
            </li>

            <li className="nav-selector">
                <Link to="/saved" 
                  className={window.location.pathname === "/saved"
                  ? "nav-term active"
                  : "nav-term"}>
                  Saved
                </Link>
            </li>
        </ul>
        </div>
    </nav>
  );
}

export default Nav;