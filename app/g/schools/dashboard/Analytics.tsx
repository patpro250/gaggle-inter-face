"use client";
import dynamic from "next/dynamic";

const BookCategoryPieChart = dynamic(
  () => import("./_components/BookCategoryPieChart"),
  { ssr: false }
);
const BorrowingTrendsLineChart = dynamic(
  () => import("./_components/BorrowingTrendsLineChart"),
  { ssr: false }
);
const TopBooksBarChart = dynamic(
  () => import("./_components/TopBooksBarChart"),
  { ssr: false }
);

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
  return (
    <>
      <h2 className="library-subtitle mt-6">Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-3 gap-6">
        <TopBooksBarChart data={topBooksData} />
        <BookCategoryPieChart data={bookCategoryData} />
        <BorrowingTrendsLineChart data={borrowingTrendsData} />
      </div>
    </>
  );
};

export default Analytics;
