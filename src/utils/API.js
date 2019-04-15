import axios from "axios";

export default {
    search: function(query) {
        console.log(`The query is ${query}`);
        return axios.get("https://www.googleapis.com/books/v1/volumes", { params: {q: query} });
    }
}