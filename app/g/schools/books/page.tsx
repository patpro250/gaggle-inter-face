import SearchBar from "./SearchBar";
import BooksTable from "./BooksTable";

const BooksPage = () => {
  return (
    <>
      <div className="flex overflow-auto justify-between">
        <h1 className="library-title">Books</h1>
        <SearchBar />
      </div>
      <div className="mt-6">
        <BooksTable />
      </div>
    </>
  );
};

export default BooksPage;
