//a.	Create an object book containing the following properties:
//      isbn, name, authors, publicationDate. (0,5 points)
// b.	Add the following methods with the following names to the book object:
//      getAuthors, setAuthors, getIsbn, setIsbn. (0,5 points)
// c.	Create two book objects. Compare if they model the same book.
//      You can use the value of the field isbn as comparison criteria in defining equality:
//      Same isbn value, same book. (0,5 points)
// d.	Create two book objects with exactly the same values in all the features.
//      Do they have the same identity? (0,5 points)

class Book{
    constructor(isbn, name, authors, publicationDate){
        this.isbn = isbn;
        this.name = name;
        this.authors = authors;
        this.publicationDate = publicationDate;
    }
    getAuthors(){
        return this.authors;
    }
    setAuthors(authors){
        this.authors = authors;
    }
    getIsbn(){
        return this.isbn;
    }
    setIsbn(isbn){
        this.isbn = isbn;
    }
}

const new_book = new Book(1001, "Tuntematon Sotilas",
    ["Väinö Linna"], "22.1.2025");
const new_book2 = new Book(1002, "Tunnettu Pasifisti",
    ["David Yksiö"], "23.1.2025");

function compareBooks(book1, book2){
    // Function to compare if two books are the same
    if (book1.isbn === book2.isbn) {
        return true;
    }
    return false;
}

console.log(compareBooks(new_book, new_book2));

const new_book3 = new Book(1001, "Sinuhe Egyptiläinen",
    ["Mika Waltari"], "22.1.2025");
const new_book4 = new Book(1001, "Sinuhe Egyptiläinen",
    ["Mika Waltari"], "22.1.2025");

if (new_book3 === new_book4){
    console.log("They share an identity");
}
else {
    console.log("They are different");
}
