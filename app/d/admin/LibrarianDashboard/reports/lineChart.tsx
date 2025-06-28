"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { GetGenreCopiesChartCard } from "../../Account/getStartsData";

interface GenreCopies {
  genre: string;
  copies: number;
}
export default function GenreCopiesChartCard() {
  const { data, error, isLoading } = useQuery<GenreCopies[], Error>({
    queryKey: ["genreCopies"],
    queryFn: GetGenreCopiesChartCard, // This is the important part
  });

  if (error) return <div>Error: {error.message}</div>;

  if (isLoading)
    return (
      <div className=" border-1 flex  justify-center items-center border-gray-200 rounded-2xl py-20 h-60 w-full bg-gray-200 animate-pulse "></div>
    );

  return (
    <div className="max-w-5xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg font-sans">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
        Inventory Distribution by Book Genre
      </h2>
      {/* Fixed height with Tailwind, scroll if overflow */}
      <div className="w-full h-[600px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 140, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis
              dataKey="genre"
              type="category"
              width={140}
              tick={{ fill: "#3674b5", fontWeight: "600" }}
            />
            <Tooltip />
            <Bar dataKey="copies" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
