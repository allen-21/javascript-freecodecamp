const books = [
  {
    title: "O Senhor dos Anéis",
    authorName: "J. R. R. Tolkien",
    releaseYear: 1940
  },
  {
    title: "Cem Anos de Solidão",
    authorName: "Gabriel García Márquez",
    releaseYear: 1967
  },
  {
    title: "Harry Potter e a Pedra Filosofal",
    authorName: "J. K. Rowling",
    releaseYear: 1997
  }
];
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }

  if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }

  return 0;
}

const filteredBooks = books.filter((book) => book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);

console.log(filteredBooks);
