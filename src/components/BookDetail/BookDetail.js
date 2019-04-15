import React from "react";
import "./bookDetailStyle.css";

function BookDetail(props) {
    return (
        <div className="book-box">
            <div className="title-n-buttons row">
                <p className="col s6 book-title">{props.title} </p>

                <button className="col s1 waves-effect waves-light btn-small right" id="save-btn">Save</button>
                
                <button className="col s1 waves-effect waves-light btn-small right" id="view-btn">View</button>

            </div>
      

            <div className="row">
                <div className=" col s12 author">Written by: {props.authors}
                </div>
            </div>


            <div className="image-and-synposis row">
                <img className="bookimage left" src={props.pic} alt={props.pic}></img>
                <p className="synopsis">{props.synopsis}</p>
            </div>

            <div className="pub-info row">
                <p className="publisher">Published by:{props.publisher} </p>
            </div>
            
            

        </div>
        
    )
}

export default BookDetail;