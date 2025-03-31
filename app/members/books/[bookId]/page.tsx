import Link from "next/link";
import { fetchBook } from "./fetchBook";
import { Book } from "./Book";

interface Props {
  params: { bookId: string };
}

const BookDetailsPage = async ({ params }: Props) => {
  const book: Book = await fetchBook(params.bookId);
  if (book === null) return <h1>No book found {params.bookId}</h1>;

  const publishedDate = new Date(book.published);
  const published = publishedDate.toLocaleDateString();

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-lg text-gray-800">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">{book.title}</h2>
          <p className="text-lg font-medium text-gray-700">By {book.author}</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 mb-2">
            <strong>Publisher:</strong> {book.publisher}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Language:</strong> {book.language}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Edition:</strong> {book.edition}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Published on:</strong> {published}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>ISBN:</strong> {book.isbn}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Language:</strong> {book.language}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>DDC Code:</strong> {book.ddcCode || "None"}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Bar Code:</strong> {book.barCode || "None"}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Call number:</strong> {book.callNo || "None"}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Genre:</strong> {book.genre || "None"}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Place of Publication:</strong> {book.placeOfPublication}
          </p>
        </div>
        <div className="mt-6 flex justify-between">
          <Link
            href="/members"
            className="bg-red-400 py-2 text-sm text-white px-4 rounded-full hover:bg-red-500 transition duration-300"
          >
            Cancel
          </Link>
          <button className="bg-primary text-sm text-white py-2 px-6 rounded-full hover:bg-primary-dark transition duration-300">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
