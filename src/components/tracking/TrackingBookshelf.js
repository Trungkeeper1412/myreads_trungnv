import Bookshelf from "./Bookshelf";
import OpenSearchButton from "./OpenSearchButton";

const TrackingBookshelf = ({ booksArray, onBookMoving }) => {
  const shelfSections = [
    { sectionKey: "currentlyReading", sectionTitle: "Currently Reading" },
    { sectionKey: "wantToRead", sectionTitle: "Want to Read" },
    { sectionKey: "read", sectionTitle: "Have Read" },
  ];
  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Bookshelf
          shelfSections={shelfSections}
          booksArray={booksArray}
          onBookMoving={onBookMoving}
        />
        <OpenSearchButton />
      </div>
    </>
  );
};
export default TrackingBookshelf;
