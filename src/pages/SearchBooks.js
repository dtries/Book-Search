import React, { Component } from "react";

import "../App.css";
import API from "../utils/API";
import BookDetail from "../components/BookDetail";
import BookSearchEntry from "../components/BookSearchEntry";
import SearchGoogleApiButton from "../components/SearchGoogleAPIButton";

class SearchBooks extends Component {
  constructor (props) {
    super(props);
    this.state = {
      result: [],
      search: ""
    };
  }

  // componentDidMount() {
  //   this.searchBooks();
  // };

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
      .then (res => 
        this.setState({ result: res.data.items })) //result: res.data.items[0].volumeInfo  //grabs information about the 1st object in array [0]
      .catch(err => console.log(`The error is ${err}`)); 
      
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.volumeInfo.title && this.state.volumeInfo.author) {
  //     API.saveBook({
  //       title: this.state.volumeInfo.title,
  //       author: this.state.volumeInfo.author,
  //       synopsis: this.state.volumeInfo.synopsis,
  //       image: this.state.volumeInfo.imageLinks.thumbnail,
  //       publisher: this.state.volumeInfo.publisher
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {

    return (
      <div>
        <div className="App-header">
          <h2>The Book Search Widget
          </h2>
        </div>

        <div className="search-area">
          <h2> Tome Finder
          </h2>

          <BookSearchEntry 
            name="googleBookSearch"
            value={this.state.search}
            onChange={this.handleInputChange}
            placeholder="Enter a Book Title Here"
          />

          <SearchGoogleApiButton 
            onClick={this.handleSearchSubmit}
          > 
          Search 
          </SearchGoogleApiButton>

        </div>
        {this.state.result.length ? (
        <div className="results-area">
          <h2>Works Retrieved
          </h2>

            {this.state.result.map(bookData => (
              <BookDetail 
                key={bookData.id}
                title={bookData.volumeInfo.title}
                link={bookData.volumeInfo.previewLink}
                authors={bookData.volumeInfo.authors}
                pic={bookData.volumeInfo.imageLinks.thumbnail ? bookData.volumeInfo.imageLinks.thumbnail : "Pic Not Available"}
                publisher={bookData.volumeInfo.publisher}
                synopsis={bookData.volumeInfo.description}
              />

          ))}
          
        </div>
        ):(<h3> </h3>
        )}

      </div>
    );
  }
}


export default SearchBooks;