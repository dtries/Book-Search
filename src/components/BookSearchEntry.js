import React from "react"


export function BookSearchEntry(props) {
    return (
        <div className="search-entry-area">  
            <div className="input-field col s6">
                <input value="Enter a Book Title Here" id="bookTitle" type="text" className="validate" {...props}/>
                <label className="active" for="bookTitle">Book Title</label>
            </div>
            <button {...props} className="waves-effect waves-light btn">Search</button>
        </div>
    );
}



export default BookSearchEntry;