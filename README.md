# Book Widget
A Book Information Search, Save, and Delete App - Book Information Courtesy of Google Books API.

## The Task 
The task was to develop a book search and save web application using the MERN (MongodB, Express, React, Node) stack. A listing of the web technologies employed is provided in the **Tech Employed** section below.

## Site Overview 
<div align="center">
    <img src="/client/public/images/SearchTop.png" width="400px" /></img> 
    <img src="/client/public/images/BookCard.png" width="400px" /></img>
    <img src="/client/public/images/SavedPage.png" width="400px" /></img> 
</div>
<br>
Upon rendering, the home page of this two page site presents the user an with an uncluttered and straight forward user experience. The user enters a book search term, such as a title or author, and then clicks the search button. Upon clicking the search button, the app retrieves information for that search from the Google Books API and renders a card based on the information returned for each book. The card dispalys the following information for each book:title, author(s), book cover image, synopsis, and publisher. Also, on each card are view and save buttons. The view button opens a new browser tab and takes the user to the google books site for that title. The save button saves the book information to the database. The user can view his/her saved books by clicking on the Saved text in the navigation bar. The saved page displays a book card with information identical to that seen on the search page, however a delete button now replaces the save button. The delete button removes that book information from the database. Clicking on the Search or Book Widget brand logo in the navigation bar returns the user to a fresh search page.

## Run App Through GitHub Pages Deployment
Try the [App](https://book-search-dtr.herokuapp.com/).
 
## Getting Started on Your Own Machine
1. Clone the [repo](https://github.com/dtries/book-search.git) to your machine. 
1. Navigate to the *book-search* directory on your machine using GitBash or your terminal.
1. Enter *npm install* in GitBash or your terminal.
   * This will install the proper js package files from a package JSON file.

   
   ## Running on a Local Server
   1. From within the book-search folder in your terminal or GitBash, enter *npm start*. this will open a local server on your machine. 
   1. The book search app will load automatically via the local server.
     
## User Actions:

  * Navagation Bar (All pages)
    1. Click Book Widget brand logo to reload or return to home page (Note: Home page and search page are identical views).
    2. Click Search to reload Home/Search page.
    3. Click Save to load saved books page.
  * Search Page 
    * Search Area
    1. Enter book search term (e.g., book title or author). 
    2. Click *Search* button to begin google books search for term entered.

    * Search Page Search Results Book Card List
    1. Click *Save* button to save book to user list.
    2. Click *View* button to view more about book at google books.

  * Saved Page
    1. Click *Delete* button to delete book from saved list.
    2. Click *View* button to view more about book at google books.

   
## Tech Employed
* Node.js - (see below)
* Axios - https://www.npmjs.com/package/axios
* Concurrently - https://www.npmjs.com/package/concurrently
* ESLint - https://eslint.org/
* Express - https://expressjs.com/
* If-env - https://www.npmjs.com/package/if-env
* JavaScript - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources
* JSX - https://reactjs.org/docs/introducing-jsx.html
* mLab MongoDB - https://mlab.com/
* MongoDB - https://www.mongodb.com/
* Mongoose - https://www.npmjs.com/package/mongoose
* Morgan - https://www.npmjs.com/package/morgan
* Nodemon - https://www.npmjs.com/package/nodemon
* React - https://reactjs.org/

## Prerequisites
* Node.js - The latest version of Node is available at: https://nodejs.org/en/

## Built With
VS Code - Text Editor

## Authored and Maintained By:
* Dennis Ries

Contact: dtries@gmail.com

© 2019 GitHub, Inc.
Terms   
Privacy
Security
Status
