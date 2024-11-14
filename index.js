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

let myTable = document.querySelector("table#table");

function displayBooks() {
    while (myTable.children.length > 1) {
        myTable.removeChild(myTable.lastElementChild);
    }

    for (let book of myLibrary) {
        let row = document.createElement("tr");

        let title = document.createElement("td");
        title.textContent = book.title;
        row.appendChild(title);

        let author = document.createElement("td");
        author.textContent = book.author;
        row.appendChild(author);

        let pages = document.createElement("td");
        pages.textContent = book.pages;
        row.appendChild(pages);

        let read = document.createElement("td");
        let readStatusCheckbox = document.createElement("input");
        readStatusCheckbox.setAttribute("type", "checkbox");
        (book.read === "Yes") ? readStatusCheckbox.setAttribute("checked", "") : readStatusCheckbox.removeAttribute("checked");
        read.appendChild(readStatusCheckbox);
        row.appendChild(read);

        let removeButtonContainer = document.createElement("td");
        removeButtonContainer.classList.add("button-container");
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.setAttribute("data-index", `${myLibrary.indexOf(book)}`)
        removeButtonContainer.appendChild(removeButton);
        row.appendChild(removeButtonContainer);

        myTable.appendChild(row);

        removeButton.addEventListener("click", removeBook);
    }
}

function removeBook(e) {
    myLibrary.splice(e.currentTarget.dataset.index, 1);
    displayBooks();
}

const addBook = document.querySelector("#add-book");
addBook.addEventListener("click", () => {
    window.dialog.showModal();
});

const submit = document.querySelector("#submit");
submit.addEventListener("click", function (e) {
    addBookToLibrary();
    window.dialog.close();
    document.querySelector("form").reset();
    e.preventDefault();
});