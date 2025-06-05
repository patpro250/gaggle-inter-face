"use client";

import { useQuery } from "@tanstack/react-query";
import millify from "millify";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import { fetchStatsUpData } from "../../Account/getStartsData";

interface LibraryStats {
  totalBooks: number;
  totalCopies: number;
  availableBooks: number;
  totalLibrarians: number;
  missingBooks: number;
  lostBooks: number;
  archivedBooks: number;
  borrowedBooks: number;
  totalAquisitions: number;
  totalStudents: number;
  totalCheckedIn: number;
  newBooks: number;
  overDued: number;
  totalClasses: number;
}

const colorPalette = [
  "#0000FF",
  "#FF69B4",
  "#ff5733",
  "#16a34a",
  "#3674b5",
  "#FF7518",
  "#FFA500",
  "#008000",
];

// SkeletonCard component for loading state
function SkeletonCard() {
  return (
    <div className="h-48 flex flex-col justify-between p-4 gap-2 border border-gray-200 rounded-md animate-pulse bg-white">
      <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
      <div className="h-10 w-1/4 bg-gray-300 rounded mt-1"></div>
      <div className="w-full h-24 bg-gray-200 rounded mt-auto"></div>
    </div>
  );
}

export default function DashboardStats() {
  const { data, isLoading, isError } = useQuery<LibraryStats>({
    queryKey: ["DashboardStats"],
    queryFn: fetchStatsUpData,
  });

  if (isLoading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 p-2 gap-6 min-h-60">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );

  if (isError || !data) return <p>Error fetching stats.</p>;

  const rawStats = Object.entries(data);

  const globalMax = Math.max(...rawStats.map(([_, v]) => Number(v)), 1);
  const MAX_FILL_PERCENT = 90;

  const stats = rawStats.map(([key, val], i) => {
    const value = Number(val);
    let percent = (value / globalMax) * 100;
    percent = Math.min(percent, MAX_FILL_PERCENT);

    return {
      title: key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase()),
      value,
      percent: Math.round(percent),
      color: colorPalette[i % colorPalette.length],
    };
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-2 gap-6 min-h-60">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="h-48 flex flex-col justify-between p-4 gap-2 border border-gray-200 rounded-md"
        >
          <div>
            <h1 className="text-sm uppercase">{stat.title}</h1>
            <p className="font-medium text-xl">{millify(stat.value)}</p>
          </div>

          <div className="w-full h-24 flex justify-center items-center">
            <ResponsiveContainer width="80%" height="100%">
              <RadialBarChart
                innerRadius="80%"
                outerRadius="100%"
                startAngle={90}
                endAngle={450}
                data={[{ name: stat.title, value: stat.percent }]}
              >
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar
                  dataKey="value"
                  fill={stat.color}
                  background={{ fill: "#e5e7eb" }}
                  cornerRadius={10}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  );
}
