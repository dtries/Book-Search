import React, { Component } from "react";
import "../App.css";
import API from "../utils/API";
import BookDetail from "../components/BookDetail";
import BookSearchEntry from "../components/BookSearchEntry"
import SearchGoogleApiButton from "../components/SearchGoogleAPIButton";

class SearchBooks extends Component {
  // constructor (props) {
  //   super(props);
  //   this.
    state = {
      result: [],
      search: "",
      error: ""
    };
  // }


// function for mapping details of each book from google books...
// api is below export default at bottom of this file

  handleInputChange = event => {
    const {value} = event.target;
    this.setState({ 
      search: value
    });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    console.log(`Search state is: ${this.state.search}`);
    this.searchBooks(this.state.search);
  };


  searchBooks = query => {
    API.search(query)
      .then (res => {
        const bookLayout = formatBookInfo(res.data.items);
        this.setState({ result: bookLayout });
      })
      .catch(err => console.log(`The error is ${err}`)); 
      
  };

  handleSave = event => {
  
      const theBook = this.state.result.find(bookData => bookData.titleId === event.target.id);

      console.log(`Title info is ${theBook.title}`);
      console.log(`Link info is ${theBook.link}`);
      console.log(`Author info is ${theBook.authors}`);
      console.log(`ID info is ${theBook.titleId}`);
      console.log(`Pic info is ${theBook.pic}`);
      console.log(`Pubisher info is ${theBook.publisher}`);
      console.log(`Synopsis info is ${theBook.synopsis}`);

      const saveInfo = {
        title: theBook.title,
        authors: theBook.authors,
        synopsis: theBook.synopsis,
        pic: theBook.pic,
        publisher: theBook.publisher,
        titleId: theBook.titleId,
        link: theBook.link
      };
      
            
      API.saveBook(saveInfo)
        .then(res =>{
          console.log(res.status, res.statusText);
          // this.props.alert.show("Volume Saved", {type: "success"})
        })
        .catch(err => {
          console.log(err);
          // this.props.alert.show("Apologies, an issue arose when attempting to save the volume.", 
            // {type: "error",
            // timeout: 3500})
        });
  };

  render() {

    return (
      <div className="App">
        <div className="wrapper">
          
          <div className="App-header">
            <h2 id="search-title">Book Search Widget
            </h2>
          </div>
          
          <div className="search-area">
            <h2 id="tome-title"> Tome Finder
            </h2>

            <BookSearchEntry 
              name="googleBookSearch"
              value={this.state.search}
              onChange={this.handleInputChange}
              placeholder="Enter a Book Title or Author Here"
            />

            <SearchGoogleApiButton 
              onClick={this.handleSearchSubmit}
            > 
            Search 
            </SearchGoogleApiButton>

          </div>

          {this.state.result.length ? (
            <div className="results-area">
              <h2 id="retrieved-title">Works Retrieved
              </h2>

              <BookDetail 
                books={this.state.result}
                clickAction={this.handleSave}
                buttonType="col s1 waves-effect waves-light btn-small right"
                buttonText = "Save"
              />
              
            </div>
          ) : (
            <h3> </h3>
          )}
        </div>
      </div>
    );
  }
}


export default SearchBooks;

const formatBookInfo = googleBooksReturn => {
  const bookInfo = [];

  googleBooksReturn.map(bookData => {
    const bookFormat = {
      key: bookData.id,
      titleId: bookData.id,
      title: bookData.volumeInfo.title,
      link: bookData.volumeInfo.previewLink,
      authors: bookData.volumeInfo.authors ? bookData.volumeInfo.authors : ['authors not Provided'],
      pic: bookData.volumeInfo.imageLinks.thumbnail ? bookData.volumeInfo.imageLinks.thumbnail : "http://drpp-ny.org/wp-content/uploads/2014/07/sorry-image-not-available.png",
      publisher: bookData.volumeInfo.publisher ? bookData.volumeInfo.publisher : "Publisher not Provided",
      synopsis: bookData.volumeInfo.description ? bookData.volumeInfo.description : "Synopsis not Provided"
    };
    bookInfo.push(bookFormat);
    return bookInfo
  });
  return bookInfo;
};