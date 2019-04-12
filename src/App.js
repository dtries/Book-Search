import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        
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

          <div class="input-field col s6">
            <input value="Enter a Book Title Here" id="first_name2" type="text" class="validate"/>
            <label class="active" for="first_name2">Book Title</label>
          </div>




          
        </div>


      </div>
    );
  }
}

export default App;
