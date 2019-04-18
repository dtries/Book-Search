import React from "react"
import "./SearchEntry.css"


export function BookSearchEntry(props) {
    return (
        <div className="search-entry-area">  
            <div className="input-field col s6">
                <input id="bookTitle" autoComplete="off" type="text" className="validate" {...props}/>
                <label className="active" id="book-title-label">Book Search Term</label>
            </div>
        </div>
    );
}



export default BookSearchEntry;