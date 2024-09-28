import { useState } from "react";
const BookStatusChanger = ({ book, onBookMoving }) => {
  const [status, setStatus] = useState(book.shelf);
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    onBookMoving(book, event.target.value);
  };
  return (
    <div className="book-shelf-changer">
      <select value={status} onChange={handleStatusChange}>
        <option value="moveto" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookStatusChanger;
