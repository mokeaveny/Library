let myLibrary = [];

function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
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
	library.forEach(book => {
		// Create the elements to display the book values
		const div = document.createElement('div');
		const bookTitle = document.createElement('p');
		const bookAuthor = document.createElement('p');
		const bookPages = document.createElement('p');

		// Add the class names to the elements
		bookTitle.classList.add('title');
		bookAuthor.classList.add('author');
		bookPages.classList.add('pages');

		// The content to be displayed in each DOM element
		bookTitle.textContent = book.title;
		bookAuthor.textContent = `Author: ${book.author}`;
		bookPages.textContent = `${book.pages} Pages`;

		div.appendChild(bookTitle);
		div.appendChild(bookAuthor);
		div.appendChild(bookPages);
		libraryContainer.appendChild(div);
	})
}

theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 455);
addBookToLibrary(theHobbit);
theHungerGames = new Book("The Hunger Games", "Suzanne Collins", 200);
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

