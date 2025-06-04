import { getApiClient } from "../g/schools/axios";
import BookCard from "./BookCard";

export type Book = {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  language: string;
};

const BookList = async () => {
  const api = await getApiClient();

  const data = await api.get('/books/recommended');
  const recommendedBooks = data.data;

  return (
    <>
      <h1 className="members-subtitle">Recommended for You!</h1>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {recommendedBooks.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/recommended");
  const recommendedBooks = await res.json();

  return {
    props: { recommendedBooks },
  };
}

export default BookList;
