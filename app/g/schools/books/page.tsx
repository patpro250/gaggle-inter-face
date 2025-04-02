import SearchBar from "./SearchBar";
import Table from "./Table";

const BooksPage = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="library-title">Books</h1>
        <SearchBar />
      </div>
      <Table />
    </>
  );
};

export default BooksPage;
