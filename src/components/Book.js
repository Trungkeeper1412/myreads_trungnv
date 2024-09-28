import React from "react";
import BookStatusChanger from "./BookStatusChanger";

function Book({ book, onBookMoving }) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${
                book.imageLinks && book.imageLinks.thumbnail
              })`,
            }}
          />
          <BookStatusChanger book={book} onBookMoving={onBookMoving} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.join(", ")}
        </div>
      </div>
    </li>
  );
}

export default Book;
