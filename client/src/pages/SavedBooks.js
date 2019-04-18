import React, {Component} from 'react';
import API from '../utils/API';
import "../App.css";
import BookDetail from "../components/BookDetail";

class SavedBooks extends Component {
  state = {books: []};

  // GET all the books in the database.
  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err))
  };

  // DELETE a book from the db.
  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err))
  };

  // Lifecycle Method - once the Bookshelf Component mounts it runs the 'loadBookshelf' method.
  componentDidMount() {
    this.loadBooks()
  }

  render() {
    return (
      <div className="saved-wrapper">
        <div className="App-header">
            <h2>The Saved Book Widget
            </h2>
        </div>

        <div className="search-area">
            <h2> Tome Shelf
            </h2>

            <BookDetail
                books={this.state.books}
                clickAction={this.deleteBook}
                buttonType="col s1 waves-effect waves-light btn-small red right"
                buttonText="Delete"
            />
        </div>
      </div>
    )
  }
}

export default SavedBooks;