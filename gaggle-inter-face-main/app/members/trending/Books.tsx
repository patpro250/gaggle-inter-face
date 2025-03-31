import { Table } from "@radix-ui/themes";
import BookCard from "../BookCard";

const trendingBooks = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    publisher: "Avery",
    language: "English",
    edition: "1st Edition",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    publisher: "Harriman House",
    language: "English",
    edition: "1st Edition",
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    publisher: "Viking Press",
    language: "English",
    edition: "1st Edition",
  },
];

const TrendingBooks = () => {
  return (
    <>
      <h1 className="members-subtitle my-2">🔥 Trending Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {trendingBooks.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            publisher={book.publisher}
            language={book.language}
            edition={book.edition}
          />
        ))}
      </div>
    </>
  );
};

export default TrendingBooks;
