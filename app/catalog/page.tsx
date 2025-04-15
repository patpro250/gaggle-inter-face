"use client";
import { useState } from "react";
import NavBar from "../ui/nav-bar/page";
import Footer from "./Footer";
import Intro from "./Intro";
import Results from "./Results";
import SearchCatalog from "./SearchCatalog";

const CatalogPage = () => {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setHasSearched(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/catalog?q=${encodeURIComponent(
          query
        )}&limit=2`
      );
      const data = await res.json();
      setResults(data.catalogs);
    } catch (err) {
      console.error("Failed to fetch:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 w-full h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow px-4 sm:px-8 h-full md:px-16 lg:px-24 mt-20 w-full">
        <Intro />
        <SearchCatalog onSearch={handleSearch} />
        {loading ? (
          <div className="flex mt-3 justify-center items-center space-x-2">
            <div className="w-6 h-6 border-4 border-t-4 border-primary border-solid rounded-full animate-spin"></div>
            <p className="dark:text-white">Loading...</p>
          </div>
        ) : hasSearched && results.length === 0 ? (
          <p className="dark:text-white text-center mt-4">No results found</p>
        ) : results.length > 0 ? (
          <Results results={results} />
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default CatalogPage;
