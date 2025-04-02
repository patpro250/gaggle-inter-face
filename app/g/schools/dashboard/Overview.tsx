import { BookOpen, Clock, Library, RefreshCcw, Users } from "lucide-react";

const schoolStats = {
  totalBooks: "12,345",
  totalStudents: "4,567",
  booksCirculated: "2,345",
  overdueBooks: "123",
  interLibraryRequests: "456",
};

const stats = [
  {
    title: "Total Books",
    value: schoolStats.totalBooks,
    icon: <BookOpen className="text-blue-500" />,
  },
  {
    title: "Total Students",
    value: schoolStats.totalStudents,
    icon: <Users className="text-green-500" />,
  },
  {
    title: "Books Circulated",
    value: schoolStats.booksCirculated,
    icon: <RefreshCcw className="text-yellow-500" />,
  },
  {
    title: "Overdue Books",
    value: schoolStats.overdueBooks,
    icon: <Clock className="text-red-500" />,
  },
  {
    title: "Inter-Library Requests",
    value: schoolStats.interLibraryRequests,
    icon: <Library className="text-purple-500" />,
  },
];

const Overview = () => {
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

export default Overview;
