import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import BookDetail from "../components/BookDetail";
// import API from "../utils/API";

class SavedBooks extends Component {
    constructor (props) {
        super (props);
            this.state = {
                book: []
            };
    }
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   componentDidMount() {
//     API.getBook(this.props.match.params.id)
//       .then(res => this.setState({ book: res.data }))
//       .catch(err => console.log(err));
//   }

//   render() {
//     return (
//         <div>
//         <div className="App-header">
//           <h2>The Saved Book Widget
//           </h2>
//         </div>

//         <div className="search-area">
//           <h2> Your Tomes
//           </h2>
//         </div>

//         {this.state.book.length ? (
//         <div className="results-area">
//           <h2>Works Retrieved
//           </h2>

//             {this.state.book.map(bookData => (
//               <BookDetail 
//                 key={bookData.id}
//                 title={bookData.volumeInfo.title}
//                 link={bookData.volumeInfo.previewLink}
//                 authors={bookData.volumeInfo.authors}
//                 pic={bookData.volumeInfo.imageLinks.thumbnail ? bookData.volumeInfo.imageLinks.thumbnail : "Pic Not Available"}
//                 publisher={bookData.volumeInfo.publisher}
//                 synopsis={bookData.volumeInfo.description}
//               />

//           ))}
          
//         </div>
//         ):(<h3> </h3>
//         )}

//       </div>
//     );
//   }
// }

    render () {
        return (
            <div>
                <h2>Hi there! This is the Saved Books Page.</h2>
            </div>
        );
    }
}


export default SavedBooks;