"use client";
import BookCategoryPieChart from "./_components/BookCategoryPieChart";
import BorrowingTrendsLineChart from "./_components/BorrowingTrendsLineChart";
import TopBooksBarChart from "./_components/TopBooksBarChart";

const topBooksData = [
  { bookTitle: "The Great Gatsby", borrowedCount: 120 },
  { bookTitle: "Moby Dick", borrowedCount: 80 },
  { bookTitle: "War and Peace", borrowedCount: 100 },
  { bookTitle: "1984", borrowedCount: 90 },
  { bookTitle: "To Kill a Mockingbird", borrowedCount: 110 },
];

const bookCategoryData = [
  { category: "Fiction", value: 40 },
  { category: "Non-Fiction", value: 30 },
  { category: "Sci-Fi", value: 20 },
  { category: "Biography", value: 10 },
];

const borrowingTrendsData = [
  { month: "Jan", borrowedBooks: 50 },
  { month: "Feb", borrowedBooks: 60 },
  { month: "Mar", borrowedBooks: 70 },
  { month: "Apr", borrowedBooks: 80 },
  { month: "May", borrowedBooks: 90 },
  { month: "Jun", borrowedBooks: 100 },
];

const Analytics = () => {
  console.log("Works");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <TopBooksBarChart data={topBooksData} />
    </div>
  );
};

export default Analytics;
