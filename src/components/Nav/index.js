import React from "react";

function Nav() {
  return (
    <nav>
        <div className="nav-wrapper">
        <a href="/" className="left">Book Widget</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="/books">Search</a></li>
            <li><a href="/saved">Saved</a></li>
        </ul>
        </div>
    </nav>
  );
}

export default Nav;