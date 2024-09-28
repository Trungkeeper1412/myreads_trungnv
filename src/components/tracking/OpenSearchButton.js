import { Link } from "react-router-dom";

const OpenSearchButton = () => {
  return (
    <div className="open-search">
      <Link to="search">
        <a>Add a book</a>
      </Link>
    </div>
  );
};

export default OpenSearchButton;
