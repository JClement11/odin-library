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

createTable(myLibrary);