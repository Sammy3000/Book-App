import Store from "./Store.js";
// UI Class: Handle UI Tasks

export default class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
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
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#tittle").value = "";
    document.querySelector("#author").value = "";
  }
}
