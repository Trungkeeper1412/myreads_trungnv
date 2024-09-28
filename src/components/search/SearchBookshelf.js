import SearchBar from "./SearchBookBar";
import SearchResult from "./SearchBooksResults";

const SearchBookshelf = ({
  myBooksArray,
  searchBooksArray,
  onBookMoving,
  onBookSearching,
  onSearchResetting,
}) => {
  return (
    <>
      <div className="search-books">
        <SearchBar
          onBookSearching={onBookSearching}
          onSearchResetting={onSearchResetting}
        />
        <SearchResult
          myBooksArray={myBooksArray}
          bookResults={searchBooksArray}
          onBookMoving={onBookMoving}
        />
      </div>
      ;
    </>
  );
};
export default SearchBookshelf;
