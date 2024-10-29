const myLibrary = [
    { title: "Book1", author: "Author1", pages: 100, read: "Read" },
    { title: "Book2", author: "Author2", pages: 200, read: "Read" },
    { title: "Book3", author: "Author3", pages: 300, read: "Not Read" }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}