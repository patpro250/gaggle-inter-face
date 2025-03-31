import BookCard from "../BookCard";
import { Book } from "../books/[bookId]/Book";
import { fetchTrendingBooks } from "./fetchTrending";

const TrendingBooks = async () => {
  const books: Book[] = await fetchTrendingBooks();
  if (books === null) return <h1>No books found </h1>;
  return (
    <>
      <h1 className="members-subtitle my-2">🔥 Trending Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {books.map((book, index) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </>
  );
};

export default TrendingBooks;
