import React from "react"


export function BookSearchEntry(props) {
    return (
        <div className="search-entry-area">  
            <div className="input-field col s6">
                <input id="bookTitle" autoComplete="off" type="text" className="validate" {...props}/>
                <label className="active">Book Title</label>
            </div>
        </div>
    );
}



export default BookSearchEntry;