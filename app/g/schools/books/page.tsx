import SearchBar from "./SearchBar";
import BooksTable from "./BooksTable";
import AddBook from "./AddBook";
import BooksOverview from "./BooksOverview";
import ExportButton from "../circulations/Export";

const BooksPage = () => {
  return (
    <>
      <h1 className="library-title">Books</h1>
      <BooksOverview />
      <div className="flex mt-8 p-2 items-center justify-between">
        <div className="col-span-2">
          <AddBook />
        </div>
        <SearchBar />
        <ExportButton />
      </div>
      <div className="mt-6">
        <BooksTable />
      </div>
    </>
  );
};

export default BooksPage;
