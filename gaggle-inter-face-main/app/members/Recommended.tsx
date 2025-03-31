import BookCard from "./BookCard";

type Book = {
  title: string;
  author: string;
  publisher: string;
  language: string;
  edition: string;
};

const BookList: React.FC = () => {
  const recommendedBooks: Book[] = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publisher: "Scribner",
      language: "English",
      edition: "1st Edition",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publisher: "J.B. Lippincott & Co.",
      language: "English",
      edition: "50th Anniversary Edition",
    },
    {
      title: "1984",
      author: "George Orwell",
      publisher: "Secker & Warburg",
      language: "English",
      edition: "1st Edition",
    },
  ];

  return (
    <>
      <h1 className="members-subtitle">Recommended for you!</h1>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {recommendedBooks.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </>
  );
};

export default BookList;
