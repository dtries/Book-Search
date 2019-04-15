import React from "react";

function SearchGoogleApiButton ({children, onClick }) {
    return (
        <button onClick={onClick} className={"waves-effect waves-light btn"}>
        {children}
        </button>
)}

export default SearchGoogleApiButton;