"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const TopBooksBarChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Top Borrowed Books
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookTitle" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="borrowedCount" fill="#4C6EF5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopBooksBarChart;
