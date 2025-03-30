import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-md mb-4 mx-auto mt-6">
      <div className="flex gap-2 w-full items-center">
        <input
          type="text"
          placeholder="Search for books or libraries"
          className="w-full py-3 max-md:py-2 px-5 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
        />
        <button className="bg-primary p-2 cursor-pointer rounded-full">
          <Search color="white" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
