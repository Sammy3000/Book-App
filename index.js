import Book from './book.js';
import UI from './UI.js';
import Store from './Store.js';

// Event:Display books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event:Add a book

document.querySelector('#book-form').addEventListener('submit', (e) => {
  // prevent default
  e.preventDefault();
  // get form values
  const tittle = document.querySelector('#tittle').value;
  const author = document.querySelector('#author').value;

  // Validate

  // Instantiate book
  const book = new Book(tittle, author);

  // Add book to UI
  UI.addBookToList(book);

  // Add book to store
  Store.addBook(book);

  // Clear fields
  UI.clearFields();
});

// Event:Remove book from UI
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);

  // Remove book from Store
  Store.removeBook(
    e.target.parentElement.previousElementSibling.previousElementSibling
      .previousElementSibling.textContent,
  );
});
