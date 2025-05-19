"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import NitSkeleton from "../_components/Skeleton";

async function fetchPosts() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
}

export default function HomePage() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
        >
          Refetch Posts
        </button>
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="mb-2">
              <NitSkeleton height={30} width={200} className="mb-1" />
              <NitSkeleton count={2} />
            </div>
          ))}
        </div>
      </main>
    );
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <button
        onClick={() => refetch()}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        Refetch Posts
      </button>
      <ul>
        {data.map((post: any) => (
          <li key={post.id} className="mb-4 p-2 border rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
