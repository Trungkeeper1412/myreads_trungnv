import React from "react";
import Book from "../Book";

function BookshelfSection({ section, bookArrays, onBookMoving }) {
  const booksInTheCorrespondSection = bookArrays.filter(
    (book) => book.shelf === section.sectionKey
  );
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{section.sectionTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksInTheCorrespondSection.map((book) => (
            <Book key={book.id} book={book} onBookMoving={onBookMoving} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default BookshelfSection;
