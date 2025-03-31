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
  const data = await fetch("http://localhost:4000/books/recommended", {
    headers: {
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg4OTZkMTQ5LWY5YjEtNDExOC1iNDE3LTBkNmJmOGFhYTI5ZiIsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJpYXQiOjE3NDMzOTQ3OTl9.bEO2h5uTalpENh8DoK9H3ANEFETuC0k4ZcsUM5mJfjg",
    },
    cache: "no-store",
  });
  const recommendedBooks = await data.json();

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

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/recommended");
  const recommendedBooks = await res.json();

  return {
    props: { recommendedBooks },
  };
}

export default BookList;
