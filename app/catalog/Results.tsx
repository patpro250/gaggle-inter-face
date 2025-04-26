"use client";
import { useState } from "react";

type Props = {
  results: {
    id: number;
    title: string;
    author: string;
  }[];
};

const Results = ({ results }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 5;
  const totalPages = Math.ceil(results.length / resultsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const paginatedResults = results.slice(
    startIndex,
    startIndex + resultsPerPage
  );

  return (
    <div className="mt- max-w-6xl mx-auto px-4">
      <p className="text-sm text-gray-500 mb-4">
        About {results.length} results
      </p>

      <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin dark:scrollbar-thumb-primary dark:scrollbar-track-gray-800">
        {paginatedResults.map((result) => {
          const bookUrl = `/catalog/book/${result.id}`;

          return (
            <div
              key={result.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6"
            >
              <a
                href={bookUrl}
                className="text-primary hover:underline text-lg font-semibold"
              >
                {result.title}
              </a>
              <p className="text-sm text-gray-500 italic mt-1">
                by {result.author}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
