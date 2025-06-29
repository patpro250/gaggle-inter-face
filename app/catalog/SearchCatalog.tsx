"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const searchCatalogSchema = z.object({
  query: z.string().min(3, "Type at least 1 word to search."),
});

type SearchCatalogQuery = z.infer<typeof searchCatalogSchema>;

type SearchCatalogProps = {
  onSearch: (query: string) => void;
};

const SearchCatalog = ({ onSearch }: SearchCatalogProps) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ resolver: zodResolver(searchCatalogSchema), mode: "onChange" });

  const onSubmit = (data: SearchCatalogQuery) => {
    onSearch(data.query);
  };

  return (
    <div className="mt-6 px-4 sm:px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-4xl w-full mx-auto gap-2 items-start flex-col sm:flex-row"
      >
        <div className="w-full sm:flex-grow">
          <input
            {...register("query")}
            type="text"
            placeholder="Find from 123,596 books..."
            className="w-full py-3 max-md:py-2 px-5 rounded-full shadow-md border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
          />
          {errors.query && (
            <p className="text-red-600 text-sm mt-1 ml-4">
              {errors.query.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className="bg-primary disabled:bg-gray-500 p-3 mt-2 sm:mt-0 sm:ml-2 rounded-full"
        >
          <Search color="white" />
        </button>
      </form>
    </div>
  );
};

export default SearchCatalog;
