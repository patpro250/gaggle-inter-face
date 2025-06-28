"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchStartsData } from "./getStartsData";

interface InstitutionStats {
  totalBooks: number;
  totalLibrarians: number;
  totalStudents: number;
}

const Starts = () => {
  const { data, isLoading, isError } = useQuery<InstitutionStats>({
    queryKey: ["stars"],
    queryFn: fetchStartsData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching payments.</p>;

  return (
    <div>
      <div className="bg-white rounded-2xl shadow p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-xl font-bold">{data.totalLibrarians}</p>
          <p className="text-gray-600">👥 All Librarians</p>
        </div>
        <div>
          <p className="text-xl font-bold">{data.totalStudents}</p>
          <p className="text-gray-600">🎓 Total Students </p>
        </div>
        <div>
          <p className="text-xl font-bold">{data.totalBooks}</p>
          <p className="text-gray-600">🗂 Total Books</p>
        </div>
        {/* <div>
          <p className="text-xl font-bold">2 hours ago</p>
          <p className="text-gray-600">🕒 </p>
        </div> */}
      </div>
    </div>
  );
};

export default Starts;
