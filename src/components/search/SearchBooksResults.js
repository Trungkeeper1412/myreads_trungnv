import Book from "../Book";

const SearchResult = ({ myBooksArray, bookResults, onBookMoving }) => {
  if (bookResults[0] === "nothing found") {
    return (
      <div className="search-books-results">
        <h1>We can't find that book. Try something else!</h1>
      </div>
    );
  }

  const updatedBooks = bookResults.map((book) => {
    const matchedBook = myBooksArray.find(
      (targetBook) => targetBook.id === book.id
    );
    if (matchedBook) {
      book.shelf = matchedBook.shelf;
    } else {
      book.shelf = "none";
    }
    return book;
  });

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map((book) => (
          <Book key={book.id} book={book} onBookMoving={onBookMoving} />
        ))}
      </ol>
    </div>
  );
};

export default SearchResult;
