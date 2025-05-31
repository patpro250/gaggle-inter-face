import React from "react";

const borrowedBooks = [
  {
    studentCode: "SC12345",
    studentName: "John Doe",
    studentClass: "Grade 10",
    bookTitle: "The Great Gatsby",
    bookCode: "B001",
    dueDate: "April 10, 2025",
    author: "F. Scott Fitzgerald",
    publisher: "Scribner",
  },
  {
    studentCode: "SC12346",
    studentName: "Jane Smith",
    studentClass: "Grade 9",
    bookTitle: "1984",
    bookCode: "B002",
    dueDate: "April 15, 2025",
    author: "George Orwell",
    publisher: "Secker & Warburg",
  },
  {
    studentCode: "SC12347",
    studentName: "Sam Johnson",
    studentClass: "Grade 11",
    bookTitle: "To Kill a Mockingbird",
    bookCode: "B003",
    dueDate: "April 8, 2025",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
  },
];

const StudentsBorrowedBooksTable = () => {
  return (
    <div className="overflow-x-auto rounded-xl border-gray-400">
      <table className="w-full border-collapse text-sm rounded-lg border-gray-300 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
          <tr>
            <th className="p-4 text-left rounded-tl-lg border-b border-gray-300 dark:border-gray-700">Student Code</th>
            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Name</th>
            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Class</th>
            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Book Title</th>
            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Book Code</th>
            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Due Date</th>
            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Author</th>
            <th className="p-4 text-left rounded-tr-lg border-b border-gray-300 dark:border-gray-700">Publisher</th>
            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Days Since Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {borrowedBooks.map((item, index) => (
            <tr key={index} className="table-r dark:hover:bg-gray-700 transition-colors">
              <td className="table-data">{item.studentCode}</td>
              <td className="table-data">{item.studentName}</td>
              <td className="table-data">{item.studentClass}</td>
              <td className="table-data">{item.bookTitle}</td>
              <td className="table-data">{item.bookCode}</td>
              <td className="table-data">{item.dueDate}</td>
              <td className="table-data">{item.author}</td>
              <td className="table-data">{item.publisher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsBorrowedBooksTable;
