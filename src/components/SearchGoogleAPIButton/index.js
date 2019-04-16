import React from "react";
import "./APIButtonStyle.css"
function SearchGoogleApiButton ({children, onClick }) {
    return (
        <div className="row">
            <button onClick={onClick} className={"left waves-effect waves-light btn"}>
            {children}
            </button>
        </div>
)}

export default SearchGoogleApiButton;