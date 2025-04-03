import React from "react";
import Pagination from "./Pagination";

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Scribner",
    dateAcquired: "January 15, 2020",
    copiesAvailable: 5,
    actions: "Edit | Delete",
  },
  {
    title: "1984",
    author: "George Orwell",
    publisher: "Secker & Warburg",
    dateAcquired: "March 1, 2018",
    copiesAvailable: 12,
    actions: "Edit | Delete",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
    dateAcquired: "August 10, 2019",
    copiesAvailable: 8,
    actions: "Edit | Delete",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
    dateAcquired: "August 10, 2019",
    copiesAvailable: 8,
    actions: "Edit | Delete",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
    dateAcquired: "August 10, 2019",
    copiesAvailable: 8,
    actions: "Edit | Delete",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
    dateAcquired: "August 10, 2019",
    copiesAvailable: 8,
    actions: "Edit | Delete",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
    dateAcquired: "August 10, 2019",
    copiesAvailable: 8,
    actions: "Edit | Delete",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
    dateAcquired: "August 10, 2019",
    copiesAvailable: 8,
    actions: "Edit | Delete",
  },
];

const BooksTable = () => {
  return (
    <>
      <div className="overflow-x-auto border rounded-xl border-gray-400">
        <table className="w-full border-collapse text-sm rounded-lg border-gray-300 dark:border-gray-700">

          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="p-4 text-left rounded-tl-lg border-b border-gray-300 dark:border-gray-700">Title</th>
              <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Author</th>
              <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Publisher</th>
              <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Date Acquired</th>
              <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Copies Available</th>
              <th className="p-4 text-left rounded-tr-lg border-b border-gray-300 dark:border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index} className="table-r dark:hover:bg-gray-700 transition-colors">
                <td className="table-data">{book.title}</td>
                <td className="table-data">{book.author}</td>
                <td className="table-data">{book.publisher}</td>
                <td className="table-data">{book.dateAcquired}</td>
                <td className="table-data">{book.copiesAvailable}</td>
                <td className="table-data">{book.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default BooksTable;
