// Book class: Represents a book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// UI Class: Handle UI Tasks

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = ` 
    <tr>
    <td>${book.title}</td>
    <td>by</td>
    <td>${book.author}</td>
    <td><a href="#"class='delete'>remove</a></td>
    <tr>
    `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#tittle').value = '';
    document.querySelector('#author').value = '';
  }
}

// Store Class:Handles Storage

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

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
  if (tittle === '' || author === '') {
    alert('please fill in all fields');
  } else {
    // Instantiate book
    const book = new Book(tittle, author);

    // Add book to UI
    UI.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Clear fields
    UI.clearFields();
  }
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
