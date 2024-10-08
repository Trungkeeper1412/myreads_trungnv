import { Link } from "react-router-dom";

const OpenSearchButton = () => {
  return (
    <div className="open-search">
      <Link to="search">
        <button>Add a book</button>
      </Link>
    </div>
  );
};

export default OpenSearchButton;
