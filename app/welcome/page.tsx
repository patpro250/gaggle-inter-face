import Image from "next/image";
import Link from "next/link";
import { Info, ArrowRightCircle } from "lucide-react";

export default function WelcomePage() {
  return (
    <div className="relative flex flex-col items-center w-[3/4] justify-center h-screen p-6 text-center">
      <Image
        src="/bg.png"
        alt="Background Image"
        fill
        sizes="100vw"
        className="object-cover hue-rotate-15 z-[-1]"
      />
      <h1 className="text-4xl max-md:text-2xl text-center font-bold text-gray-800 mb-4">
        Welcome to NitBook!
      </h1>
      <p className="text-center text-base text-gray-950 max-w-6xl mb-6 max-md:text-sm">
        Stop wasting your time writing library records in books, which can be
        tedious, prone to errors, and difficult to manage. Traditional
        record-keeping slows down your operations, making it harder to track
        borrowed books, overdue returns, and available inventory. Manual entries
        can also lead to misplaced records, causing unnecessary frustration for
        both librarians and readers.
      </p>
      <div className="flex max-md:flex-col max-md:space-x-0 max-md:gap-4 space-x-4">
        <Link
          href="/docs"
          className="flex items-center px-6 py-2 text-slate-900 text-sm bg-gray-200 border rounded-lg shadow hover:text-white hover:bg-slate-900 transition"
        >
          Learn More
          <Info className="w-4 h-4 ml-2" />
        </Link>
        <Link
          href="/get-started"
          className="flex items-center px-6 py-2 text-white text-sm bg-blue-600 rounded-lg shadow hover:bg-slate-900 transition"
        >
          Start Now
          <ArrowRightCircle className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}
