import Link from "next/link";
import { Book } from "./books/[bookId]/Book";

const BookCard: React.FC<Book> = ({
  title,
  id,
  author,
  publisher,
  language,
  edition,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-80">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-semibold text-black mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">
          <span className="font-extrabold">by</span> {author}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-extrabold">Publisher: </span>
          {publisher}
        </p>

        <div className="flex justify-center gap-2 w-full mt-3">
          <p className="text-gray-500 text-sm">{language}</p>
          <p className="text-gray-500 font-extrabold text-sm">{edition}</p>
        </div>

        <div className="mt-4 flex justify-center">
          <Link
            href={`/members/books/${id}`}
            className="bg-primary text-white py-2 px-4 rounded-full hover:scale-110 transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
