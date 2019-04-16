import React from "react";
import "../../App.css"
function SaveBtn ({children, onClick }) {
    return (
        <div className="row">
            <button className="col s1 waves-effect waves-light btn-small right" onClick={onClick} id="save-btn">{children}</button>
        </div>
    )}
                
export default SaveBtn;