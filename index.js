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

// Navigation Section

const newlist = document.querySelector('.list-menu');
const add = document.querySelector('.add-new');
const contact = document.querySelector('.contact-menu');
const contactPage = document.querySelector('.contact');
const formSection = document.querySelector('.form-class');
const addedBooks = document.querySelector('.booksContainer');
const bookHead = document.querySelector('.book-head');

add.addEventListener('click', () => {
  formSection.style.display = 'flex';
  addedBooks.style.display = 'none';
  contactPage.style.display = 'none';
  bookHead.style.display = 'none';
});
newlist.addEventListener('click', () => {
  formSection.style.display = 'none';
  contactPage.style.display = 'none';
  addedBooks.style.display = 'block';
  bookHead.style.display = 'block';
});
contact.addEventListener('click', () => {
  contactPage.style.display = 'flex';
  formSection.style.display = 'none';
  addedBooks.style.display = 'none';
  bookHead.style.display = 'none';
});
