let myLibrary = [];
let counter = 0;

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.info = function() {
	return "${this.title} by ${this.author}, with {this.pages} pages";
}

function addBookToLibrary(book) {
	// Appends the book to the array myLibrary
	myLibrary.push(book);
}

const libraryContainer = document.querySelector('.library-container');

function render(library) {
	counter = 0;
	library.forEach(book => {
		// Create the elements to display the book values
		const div = document.createElement('div');
		div.setAttribute("book-index", counter);
		counter = counter + 1;
		const bookTitle = document.createElement('p');
		const bookAuthor = document.createElement('p');
		const bookPages = document.createElement('p');
		const bookRemove = document.createElement('button');
		const readButton = document.createElement("button");
		const lineBreak = document.createElement("BR");
	
		bookRemove.addEventListener("click", function() {
			theIndex = this.parentNode.getAttribute("book-index");
			//While loop that removes all of the div book elements
			while(libraryContainer.firstChild) {
				libraryContainer.firstChild.remove();
			}
			removeBook(theIndex)
			counter = counter - 1;
		})

		// Add the class names to the elements
		bookTitle.classList.add('title');
		bookAuthor.classList.add('author');
		bookPages.classList.add('pages');
		bookRemove.classList.add("bookDelete");

		// The content to be displayed in each DOM element
		bookTitle.textContent = book.title;
		bookAuthor.textContent = `Author: ${book.author}`;
		bookPages.textContent = `${book.pages} Pages`;
		readButton.textContent = book.read ? "Read": "Not Read";
		bookRemove.textContent = "Delete Book";

		div.appendChild(bookTitle);
		div.appendChild(bookAuthor);
		div.appendChild(bookPages);
		div.appendChild(readButton);
		div.appendChild(lineBreak);
		div.appendChild(bookRemove);
		libraryContainer.appendChild(div);
	})
}

theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 455, true);
addBookToLibrary(theHobbit);
theHungerGames = new Book("The Hunger Games", "Suzanne Collins", 200, false);
addBookToLibrary(theHungerGames);

render(myLibrary);

window.onload = function() {
	document.getElementById("newBookForm").style.display = "none";
};

// When the show parameter isn't 1 then the form isn't shown.
function newBookForm(show) {
	if (show == 1) {
		document.getElementById("newBookForm").style.display = "block";
	}
	else {
		document.getElementById("newBookForm").style.display = "none";
	}
}

function removeBook(index) {
	console.log(index);
	// Removes one element from the given index
	myLibrary.splice(index, 1);
	render(myLibrary);
}