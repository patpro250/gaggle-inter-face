"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { GetMonthlyBooksLineChart } from "../../Account/getStartsData";

interface MonthlyData {
  month: string;
  acquired: number;
  borrowed: number;
}

export default function MonthlyBooksLineChart() {
  const { data, isLoading, isError } = useQuery<MonthlyData[]>({
    queryKey: ["GetMonthlyBooksLineChart"],
    queryFn: GetMonthlyBooksLineChart,
  });

  if (isLoading)
    return (
      <div className=" border-1 flex  justify-center items-center border-gray-200 rounded-2xl py-20 h-60 w-full bg-gray-200 animate-pulse "></div>
    );

  if (isError) return <p>fetch error</p>;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Monthly Acquired vs Borrowed Books
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 14, fill: "#333" }} />
          <YAxis
            allowDecimals={false}
            tick={{ fontSize: 14, fill: "#333" }}
            label={{
              value: "Books Count",
              angle: -90,
              position: "insideLeft",
              offset: 10,
              style: { textAnchor: "middle", fontSize: 14, fill: "#555" },
            }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#fff", borderRadius: 8 }}
            cursor={{ strokeDasharray: "3 3" }}
          />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="acquired"
            stroke="#4f46e5"
            strokeWidth={3}
            dot={{ r: 6, fill: "#4f46e5" }}
            activeDot={{ r: 8 }}
            name="Acquired"
          />
          <Line
            type="monotone"
            dataKey="borrowed"
            stroke="#16a34a"
            strokeWidth={3}
            dot={{ r: 6, fill: "#16a34a" }}
            activeDot={{ r: 8 }}
            name="Borrowed"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
