const getTheTitles = books => {
    let bookTitles = [];
    books.forEach(book => bookTitles.push(book.title))
    return bookTitles;
};

// for testing purpose
const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
