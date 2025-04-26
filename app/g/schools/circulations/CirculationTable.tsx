import { Hand, ArrowRight, RefreshCw } from "lucide-react";
import Pagination from "../books/Pagination";

const circulations = [
  {
    borrowerName: "John Doe",
    bookTitle: "The Great Gatsby",
    bookCode: "B001",
    timeSinceBorrowed: "5 days",
    fines: "$0.00",
    status: "Borrowed",
    dueDate: "April 10, 2025",
  },
  {
    borrowerName: "Jane Smith",
    bookTitle: "1984",
    bookCode: "B002",
    timeSinceBorrowed: "2 weeks",
    fines: "$1.50",
    status: "Borrowed",
    dueDate: "April 15, 2025",
  },
  {
    borrowerName: "Sam Johnson",
    bookTitle: "To Kill a Mockingbird",
    bookCode: "B003",
    timeSinceBorrowed: "3 days",
    fines: "$0.00",
    status: "Borrowed",
    dueDate: "April 8, 2025",
  },
];

const CirculationsTable = () => {
  return (
    <>
      <div className="overflow-x-auto border border-px rounded-xl border-gray-400">
        <table className="w-full border-collapse text-sm rounded-lg border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="p-4 text-left rounded-tl-lg border-b border-gray-300 dark:border-gray-700">Borrower Name</th>
              <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Book Title</th>
              <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Book Code</th>
              <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Time Since Borrowing</th>
              <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Fines</th>
              <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Status</th>
              <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Due Date</th>
              <th className="p-4 text-left rounded-tr-lg border-b border-gray-300 dark:border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {circulations.map((item, index) => (
              <tr key={index} className="table-r dark:hover:bg-gray-700 transition-colors">
                <td className="table-data">{item.borrowerName}</td>
                <td className="table-data">{item.bookTitle}</td>
                <td className="table-data">{item.bookCode}</td>
                <td className="table-data">{item.timeSinceBorrowed}</td>
                <td className="table-data">{item.fines}</td>
                <td className="table-data">{item.status}</td>
                <td className="table-data">{item.dueDate}</td>
                <td className="table-data">
                  <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button className="ml-2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default CirculationsTable;
