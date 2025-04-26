"use client";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { search } from "./search";
import SearchResults from "./SearchResults";

const searchSchema = z.object({
  query: z.string().min(1, "Type something to search."),
});

type Fields = z.infer<typeof searchSchema>;

const send = async (
  data: Fields,
  setResults: React.Dispatch<React.SetStateAction<any>>,
  setSearched: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let results = await search(data.query);
  setResults(results);
  setSearched(true);
};

const SearchBar = () => {
  const [results, setResults] = useState<{ books: any[]; institutions: any[] }>(
    {
      books: [],
      institutions: [],
    }
  );

  const [searched, setSearched] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Fields>({
    resolver: zodResolver(searchSchema),
    mode: "onChange",
  });

  return (
    <div className="w-full mb-4 mx-auto mt-8 max-md:mt-4">
      <form
        onSubmit={handleSubmit((data) => send(data, setResults, setSearched))}
        className="flex gap-2 w-full max-w-5xl mx-auto items-center justify-center"
      >
        <input
          {...register("query")}
          type="text"
          placeholder="Search for books or libraries"
          className="w-2/3 py-3 max-md:py-2 px-5 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
        />
        <button
          disabled={!isValid}
          className="bg-primary p-2 cursor-pointer rounded-full"
        >
          <Search color="white" />
        </button>
      </form>

      <SearchResults
        books={results.books}
        institutions={results.institutions}
        searched={searched}
      />
    </div>
  );
};

export default SearchBar;
