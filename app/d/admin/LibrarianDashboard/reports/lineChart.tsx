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

const data12 = [
  { genre: "Noise", copies: 4 },
  { genre: "Blue Note", copies: 10 },
  { genre: "K-Pop", copies: 8 },
  { genre: "Afro-Pop", copies: 5 },
  { genre: "Chicago Blues", copies: 6 },
  { genre: "Hard Rock", copies: 5 },
  { genre: "Britpop", copies: 7 },
  { genre: "Instrumental", copies: 8 },
  { genre: "Soundtrack", copies: 7 },
  { genre: "French Pop", copies: 5 },
  { genre: "Jackin House", copies: 9 },
  { genre: "Shaabi", copies: 6 },
  { genre: "Malay", copies: 5 },
  { genre: "IDM", copies: 4 },
  { genre: "Emo", copies: 4 },
  { genre: "Swamp Pop", copies: 7 },
  { genre: "New Age", copies: 3 },
  { genre: "Mugham", copies: 9 },
  { genre: "Kitsch", copies: 6 },
  { genre: "Pagode", copies: 4 },
  { genre: "Tango", copies: 4 },
  { genre: "Mandopop", copies: 8 },
  { genre: "Cool Jazz", copies: 6 },
  { genre: "Southern Rock", copies: 2 },
  { genre: "March", copies: 5 },
  { genre: "Baladas y Boleros", copies: 5 },
  { genre: "Rock", copies: 5 },
  { genre: "Chicago House", copies: 5 },
  { genre: "Deep House", copies: 6 },
  { genre: "J-Pop", copies: 5 },
  { genre: "Conjunto", copies: 5 },
  { genre: "Baroque", copies: 2 },
  { genre: "Garage", copies: 9 },
  { genre: "Industrial", copies: 5 },
  { genre: "East Coast Rap", copies: 5 },
  { genre: "Latin Rap", copies: 7 },
  { genre: "EDM", copies: 9 },
  { genre: "Experimental Rock", copies: 6 },
  { genre: "Krautrock", copies: 5 },
  { genre: "Synth Pop", copies: 6 },
  { genre: "World", copies: 7 },
  { genre: "Underground Rap", copies: 8 },
  { genre: "Western Swing", copies: 6 },
  { genre: "Musicals", copies: 4 },
  { genre: "Electric Blues", copies: 6 },
  { genre: "Roots Rock", copies: 9 },
  { genre: "Downtempo", copies: 6 },
  { genre: "Pop Film", copies: 7 },
  { genre: "Death Metal", copies: 9 },
  { genre: "Doo-wop", copies: 8 },
  { genre: "Breakbeat", copies: 9 },
];

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
              tick={{ fill: "#4B5563", fontWeight: "600" }}
            />
            <Tooltip />
            <Bar dataKey="copies" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
