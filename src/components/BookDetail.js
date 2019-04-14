import React from "react";

function BookDetail(props) {
    return (
        <div className="book-box">
        <span className="book-title">Title: {props.title} </span>
        <button className="waves-effect waves-light btn">View</button>
        <button className="waves-effect waves-light btn">Save</button>


        <div className="author">Written by {props.authors}
        </div>

        <div className="image-and-synposis">
            <img className="bookimage" src={props.pic} alt={props.pic}></img>
            <span className="synopsis">{props.synopsis}</span>
        
        </div>

    </div>
        
    )
}

export default BookDetail;