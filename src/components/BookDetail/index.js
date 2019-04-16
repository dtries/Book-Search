import React from "react";
import "./bookDetailStyle.css";
import API from "../../utils/API"
// import { Link } from "react-router-dom";

function BookDetail(props) {



    return (
        <div className="book-box">
            <div className="title-n-buttons row">
                <p className="col s6 book-title">{props.title} </p>

                <button className="col s1 waves-effect waves-light btn-small right" onClick={handleFormSubmit} id="save-btn">Save</button>
                {/* <SaveBtn>Save</SaveBtn> */}

                <a className="col s1 waves-effect waves-light btn-small right" href={props.link} target="_blank" rel="noopener noreferrer" id="view-btn">View</a>

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

function handleFormSubmit(props, event) {
    // event.preventDefault();
    console.log("MADE IT HERE!!!!!!!!!!")
    if (props.title && props.author) {
      API.saveBook({
        title: props.title,
        author: props.author,
        synopsis: props.synopsis,
        image: props.thumbnail,
        publisher:props.publisher
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };