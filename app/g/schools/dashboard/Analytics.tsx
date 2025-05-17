"use client";
import dynamic from "next/dynamic";

const BorrowingTrendsLineChart = dynamic(() => import("./_components/BorrowingTrendsLineChart"), { ssr: false });
const TopBooksBarChart = dynamic(() => import("./_components/TopBooksBarChart"), { ssr: false });

const Analytics = ({ topBooksData, borrowingTrendsData }) => {
  return (
    <>
      <h2 className="library-subtitle mt-6">Analytics</h2>
      <div className="grid grid-cols-1 mt-4 gap-6">
        <TopBooksBarChart data={topBooksData} />
        <BorrowingTrendsLineChart data={borrowingTrendsData} />
      </div>
    </>
  );
};

export default Analytics;
