let library = [];

const temp = document.querySelector(".book-template");
const bookshelf = document.querySelector("#books");
let idBook = library.length;
function Book(title, author) {
  this.id = idBook;
  this.title = title;
  this.author = author;
  idBook += 1;
}
function LibraryLoad() {
  library = JSON.parse(localStorage.library);
  bookshelf.innerHTML = "";
  bookshelf.appendChild(temp);
  for (let i = 0; i < library.length; i += 1) {
    // eslint-disable-next-line no-use-before-define
    DisplayBook(library[i]);
  }
}
//save book to local storage
function SaveBook(title, author) {
  const book = new Book(title, author);
  if (!Array.isArray(library)) {
    library = [];
  }
  library.push(book);
  localStorage.library = JSON.stringify(library);
  LibraryLoad();
}
//Event that happens when submiting the form
document.getElementById("AddBook").addEventListener("submit", (event) => {
  event.preventDefault();
  const formAddBook = document.forms.AddBook;
  const bookData = new FormData(formAddBook);
  const bookTitle = bookData.get("title");
  const bookAuthor = bookData.get("author");
  formAddBook.reset();
  SaveBook(bookTitle, bookAuthor);
});

LibraryLoad();
