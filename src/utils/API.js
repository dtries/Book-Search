import axios from "axios";
// const BASEURL = "https://www.googleapis.com/books/v1/volumes";
// const query="fight club";
// const wholeRequest = ({params: {q: query}});

// console.log(`The entire request is ${BASEURL, wholeRequest}`);




export default {
    search: function(query) {
        console.log(`The query is ${query}`);
        return axios.get("https://www.googleapis.com/books/v1/volumes", { params: {q: query} });
    }
}