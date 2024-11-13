const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector('input[name="read"]:checked').value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}
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
addBook.addEventListener("click", () => {
    window.dialog.showModal();
});

const submit = document.querySelector("#submit");
submit.addEventListener("click", function (e) {
    addBookToLibrary();
    window.dialog.close();
    e.preventDefault();
});