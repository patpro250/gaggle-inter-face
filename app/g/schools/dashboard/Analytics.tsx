"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { auth } from "../../../auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const BorrowingTrendsLineChart = dynamic(() => import("./_components/BorrowingTrendsLineChart"), { ssr: false });
const TopBooksBarChart = dynamic(() => import("./_components/TopBooksBarChart"), { ssr: false });

const Analytics = () => {
  const [topBooksData, setTopBooksData] = useState([]);
  const [borrowingTrendsData, setBorrowingTrendsData] = useState([]);
  
  useEffect(() => {
    const fetchAnalytics = async () => {
      const session = await auth();
      const res = await fetch(`${API_URL}/librarians/analytics`, {headers: {'x-auth-token': session.accessToken}});
      const data = res.json();
      setTopBooksData(data.topBooksData);
      setBorrowingTrendsData(data.borrowingTrendsData);
    };
    fetchAnalytics();
  }, []);

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
