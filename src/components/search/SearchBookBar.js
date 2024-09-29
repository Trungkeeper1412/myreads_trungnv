import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import { useState } from "react";

const SearchBar = ({ onBookSearching, onSearchResetting }) => {
  const [query, setQuery] = useState("");
  const debouncedSearch = debounce((value) => onBookSearching(value), 500);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    debouncedSearch(event.target.value);
  };

  return (
    <div className="search-books-bar">
      <Link to="/">
        <button className="close-search" onClick={onSearchResetting}>
          Close
        </button>
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={query}
          onChange={handleQueryChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
