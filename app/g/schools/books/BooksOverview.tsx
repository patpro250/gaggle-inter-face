import {
  BookOpen,
  Library,
  RefreshCcw,
  Bookmark,
  ShieldAlert,
  PlusCircle,
  Archive,
  XCircle
} from "lucide-react";
import { getApiClient } from "../axios";

const BooksOverview = async () => {

  const api = await getApiClient();
  const { data: bookStats } = await api.get('/books/overview');
  
  const stats = [
    {
      title: "Total Books",
      value: bookStats.totalBooks,
      icon: <Library className="text-blue-500" />,
    },
      {
      title: "Old Books",
      value: bookStats.old,
      icon: <BookOpen className="text-teal-500" />,
    },
    {
      title: "Available Book Copies",
      value: bookStats.available,
      icon: <BookOpen className="text-green-500" />,
    },
    {
      title: "Book Copies Checked Out",
      value: bookStats.checkedOut,
      icon: <RefreshCcw className="text-yellow-500" />,
    },
    {
      title: "Book Copies Reserved",
      value: bookStats.reserved,
      icon: <Bookmark className="text-purple-500" />,
    },
    {
      title: "Book Copies Missed ",
      value: bookStats.missing,
      icon: <ShieldAlert className="text-red-500" />,
    },
    {
      title: "Book Copies Damaged",
      value: bookStats.damaged,
      icon: <XCircle className="text-gray-500" />,
    },
    {
      title: "New Book Copies Arrivals",
      value: bookStats.new,
      icon: <PlusCircle className="text-indigo-500" />,
    },
    {
      title: "Book Copies Archived",
      value: bookStats.archived,
      icon: <Archive className="text-orange-500" />,
    }
  ];

  return (
    <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center p-4 bg-white dark:bg-gray-800 shadow-md rounded-2xl"
        >
          <div className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full">
            {stat.icon}
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {stat.title}
            </p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {stat.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksOverview;
