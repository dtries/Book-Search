import React from "react";
import "./bookDetailStyle.css";

function BookDetail(props) {
    return (
        <div>
            {props.books.map(book => (
                <div className="book-box"
                key={
                    book._id
                    ? book._id
                    : book.titleId
                }>
                
                    <div className="title-n-buttons row">
                        <p className="col s6 book-title">{book.title} </p>

                        <button className={props.buttonType} onClick={props.clickAction} id={book._id ? book._id : book.titleId }>{props.buttonText}</button>
                        
                        <a className="col s2 waves-effect waves-light btn-small right" href={book.link} target="_blank" rel="noopener noreferrer" id="view-btn">View</a>

                    </div>
            

                    <div className="row">
                        <div className=" col s12 authors">Written by: {book.authors.join(", ")}
                        </div>
                    </div>


                    <div className="image-and-synposis row">
                        <img className="bookimage left" src={book.pic} alt={book.pic}></img>
                        <p className="synopsis">{book.synopsis}</p>
                    </div>

                    <div className="pub-info row">
                        <p className="publisher">Published by:{book.publisher} </p>
                    </div>
                    
                    

                </div>
            ))}
        </div>
        
    )
}

export default BookDetail;