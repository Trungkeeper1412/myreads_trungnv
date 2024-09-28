import React from "react";
import BookshelfSection from "./BookshelfSection";

function Bookshelf({ shelfSections, booksArray, onBookMoving }) {
  return (
    <div className="list-books-content">
      {shelfSections.map((section) => (
        <BookshelfSection
          key={section.sectionKey}
          section={section}
          bookArrays={booksArray}
          onBookMoving={onBookMoving}
        />
      ))}
    </div>
  );
}

export default Bookshelf;
