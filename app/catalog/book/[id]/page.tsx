// import { ArrowLeft } from "lucide-react";
// import { notFound } from "next/navigation";
// import { Metadata } from "next";
// import Link from "next/link";
// import { APP_NAME } from "../../../constants";

// // Shared prop type for route parameters
// interface PageProps {
//   params: { id: string };
// }

// type Book = {
//   title: string;
//   author: string;
//   isbn: string;
//   published: string;
//   publisher: string;
//   category: string;
//   language: string;
//   description: string;
//   ddcCode: string;
//   placeOfPublication?: string;
//   lccCode: string;
//   callNo: string;
//   keywords: string[];
//   format: string;
//   edition?: string;
//   pages?: number;
//   coverImageURL?: string;
// };

// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const bookDetails = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/catalog/${params.id}`
//   ).then((res) => res.json());

//   return {
//     title: `${bookDetails?.title} | ${APP_NAME} Catalog` || "Book Details",
//     description: `Details of the book: ${bookDetails?.title}`,
//   };
// }

// const BookDetailsPage = async ({ params }: PageProps) => {
//   const { id } = params;

//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/catalog/${id}`);
//   const book: Book = await res.json();

//   if (!book) {
//     notFound();
//   }

//   return (
//     <div className="bg-white dark:bg-gray-900 w-full overflow-y-auto h-screen flex flex-col">
//       <header className="p-4 flex items-center justify-between bg-gray-800 text-white">
//         <Link
//           href="/catalog"
//           className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
//         >
//           <ArrowLeft size={24} color="white" />
//         </Link>
//         <h1 className="text-xl font-semibold">Book Details</h1>
//       </header>
//       <main className="flex-grow px-4 sm:px-8 md:px-16 lg:px-24 py-6">
//         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
//             {book.title}
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-400">
//             {book.author}
//           </p>
//           <p className="mt-4 text-gray-800 dark:text-gray-200">
//             {book.description}
//           </p>

//           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <strong className="dark:text-white">ISBN:</strong>{" "}
//               <span className="text-gray-600 dark:text-gray-400">
//                 {book.isbn}
//               </span>
//             </div>
//             <div>
//               <strong className="dark:text-white">Published:</strong>{" "}
//               <span className="text-gray-600 dark:text-gray-400">
//                 {new Date(book.published).toLocaleDateString()}
//               </span>
//             </div>
//             <div>
//               <strong className="dark:text-white">Publisher:</strong>{" "}
//               <span className="text-gray-600 dark:text-gray-400">
//                 {book.publisher}
//               </span>
//             </div>
//             <div>
//               <strong className="dark:text-white">Category:</strong>{" "}
//               <span className="text-gray-600 dark:text-gray-400">
//                 {book.category}
//               </span>
//             </div>
//             <div>
//               <strong className="dark:text-white">Language:</strong>{" "}
//               <span className="text-gray-600 dark:text-gray-400">
//                 {book.language}
//               </span>
//             </div>
//             <div>
//               <strong className="dark:text-white">Pages:</strong>{" "}
//               <span className="text-gray-600 dark:text-gray-400">
//                 {book.pages}
//               </span>
//             </div>
//             <div>
//               <strong className="dark:text-white">DDC Code:</strong>{" "}
//               <span className="text-gray-600 dark:text-gray-400">
//                 {book.ddcCode}
//               </span>
//             </div>
//             <div>
//               <strong className="dark:text-white">Place of Publication:</strong>{" "}
//               <span className="text-gray-600 dark:text-gray-400">
//                 {book.placeOfPublication || "N/A"}
//               </span>
//             </div>
//             <div>
//               <strong className="dark:text-white">LCC Code:</strong>{" "}
//               <span className="text-gray-600 dark:text-gray-400">
//                 {book.lccCode}
//               </span>
//             </div>
//             <div>
//               <strong className="dark:text-white">Call No:</strong>{" "}
//               <span className="text-gray-600 dark:text-gray-400">
//                 {book.callNo}
//               </span>
//             </div>
//             <div>
//               <strong className="dark:text-white">Keywords:</strong>{" "}
//               <span className="text-gray-600 dark:text-gray-400">
//                 {book.keywords.join(", ")}
//               </span>
//             </div>
//             <div>
//               <strong className="dark:text-white">Format:</strong>{" "}
//               <span className="text-gray-600 dark:text-gray-400">
//                 {book.format}
//               </span>
//             </div>
//             <div>
//               <strong className="dark:text-white">Edition:</strong>{" "}
//               <span className="text-gray-600 dark:text-gray-400">
//                 {book.edition || "N/A"}
//               </span>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default BookDetailsPage;

import React from "react";

const page = () => {
  return (
    <div>
      <h1>ts ignore</h1>
    </div>
  );
};

export default page;
