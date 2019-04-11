import axios from "axios";
const googleBooksKey = `${process.env.REACT_APP_googleBooks}`
console.log(googleBooksKey);
console.log('API: '+process.env.REACT_APP_googleBooks);
console.log(process.env.REACT_APP_DO_I_WORK);

export default {
  search: function (searchQuery) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${googleBooksKey}`)
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
