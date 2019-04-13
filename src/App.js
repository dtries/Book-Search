import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
          
          <nav>
            <div className="nav-wrapper">
              <a href="/" className="left">Book Search</a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="search.html">Search</a></li>
                <li><a href="saved.html">Saved</a></li>
              </ul>
            </div>
          </nav>

          <div className="App-header">
            <h2>Book Search
            </h2>
          </div>

          <div className="search-area">
            <h2>Search For a Book
            </h2>

            <div className="input-field col s6">
              <input value="Enter a Book Title Here" id="first_name2" type="text" className="validate"/>
              <label className="active" for="first_name2">Book Title</label>
            </div>
            <button className="waves-effect waves-light btn">Search</button>
          </div>

          <div className="results-area">
            <h2>Results
            </h2>


              <div className="book-box">
                <span className="book-title">Book Title Here</span>
                <button className="waves-effect waves-light btn">View</button>
                <button className="waves-effect waves-light btn">Save</button>


              <div className="author">Written by {/* TO DO */}
              </div>

              <div className="image-and-synposis">
                <img className="bookimage" src="" alt="Book Cover"></img>
                <span className="synopsis">This is the synopsis</span>
              
              </div>

            </div>


          </div>

        </div>
      </div>
    );
  }
}

export default App;
