import React from "react";
import "./APIButtonStyle.css"
function SearchGoogleApiButton ({children, onClick }) {
    return (
        <div className="row">
            <div className="col">
                <button onClick={onClick} className={"api-btn left waves-effect waves-light btn"}>
                {children}
                </button>
            </div>
        </div>
)}

export default SearchGoogleApiButton;