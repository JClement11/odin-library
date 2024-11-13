const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

let myTable = document.querySelector("#table");

function createTable(tableData) {
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");

    let headers = ["Title", "Author", "Pages", "Read?"];

    headers.forEach(headerText => {
        let header = document.createElement("th");
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    tableData.forEach(data => {
        let row = document.createElement("tr");

        Object.values(data).forEach(text => {
            let cell = document.createElement("td");
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    myTable.appendChild(table);
}
const addBook = document.querySelector("#add-book");
addBook.addEventListener("click", function (e) {
    window.dialog.showModal();
});

createTable(myLibrary);