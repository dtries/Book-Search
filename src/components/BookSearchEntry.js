import React from "react"


function BookSearchEntry(props) {
<div className="search-entry-area" onClick={props.handleClick}>  
    <div className="input-field col s6">
        <input value="Enter a Book Title Here" id="first_name2" type="text" className="validate"/>}
        <label className="active" for="first_name2">Book Title</label>
    </div>
    <button className="waves-effect waves-light btn">Search</button>
</div>
}

export default BookSearchEntry;