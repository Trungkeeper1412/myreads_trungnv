import "./App.css";
import { useState, useEffect } from "react";
import TrackingBookshelf from "./components/tracking/TrackingBookshelf";
import SearchBookshelf from "./components/search/SearchBookshelf";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";

function App() {
  const [booksArray, setBooksArray] = useState([]);
  const [searchBooksArray, setSearchBooksArray] = useState([]);

  useEffect(() => {
    const callGetAllBooksAPI = async () => {
      const res = await BooksAPI.getAll();
      setBooksArray(res);
    };
    callGetAllBooksAPI();
  }, [booksArray]);

  const moveBook = async (book, shelf) => {
    try {
      const res = await BooksAPI.update(book, shelf);
      const updatedBooks = booksArray.map((targetBook) => {
        if (targetBook.id === book.id) {
          targetBook.shelf = shelf;
        }
        return targetBook;
      });
      setBooksArray(updatedBooks);
    } catch (err) {
      console.log(err);
    }
  };

  const searchBook = async (query) => {
    const maxResults = 100;
    try {
      if (query.trim()) {
        const res = await BooksAPI.search(query, maxResults);
        console.log(res);
        if (res) {
          setSearchBooksArray(res);
        }
        if (res.error) {
          setSearchBooksArray(["nothing found"]);
        }
      } else {
        setSearchBooksArray([]);
      }
    } catch (err) {
      setSearchBooksArray([]);
      console.log(err);
    }
  };

  const resetSearchBook = () => {
    setSearchBooksArray([]);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <TrackingBookshelf
              booksArray={booksArray}
              onBookMoving={moveBook}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchBookshelf
              myBooksArray={booksArray}
              searchBooksArray={searchBooksArray}
              onBookMoving={moveBook}
              onBookSearching={searchBook}
              onSearchResetting={resetSearchBook}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
