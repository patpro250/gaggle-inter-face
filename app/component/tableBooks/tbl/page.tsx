import React from "react";

import Link from "next/link";
import { Badge } from "@radix-ui/themes";
import { UserRoundPen, Trash2, View } from "lucide-react";
import HeaderTable from "../header/page";
import FooterTable from "../footer/page";
import HeaderBookTable from "../header/page";
import FooterBookTable from "../footer/page";
const bookData = [
  {
    id: "a4e0bc52-bac4-4f69-9d95-bad9ff4d85b4",
    bookTitle: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Charles Scribner's Sons",
    copies: 12,
    language: "English",
  },
  {
    id: "5d9247d3-c4c4-4296-9355-7a9a9c99a624",
    bookTitle: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
    copies: 8,
    language: "English",
  },
  {
    id: "9b6d10f9-5b35-4e7e-aef2-f4623f8f4c93",
    bookTitle: "1984",
    author: "George Orwell",
    publisher: "Secker & Warburg",
    copies: 15,
    language: "English",
  },
  {
    id: "fa4a4fe9-0725-4645-8db6-5cb3510f39c1",
    bookTitle: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publisher: "Little, Brown and Company",
    copies: 5,
    language: "English",
  },
  {
    id: "dbac97d4-b7c8-4388-8b3d-e6a2e4511e5f",
    bookTitle: "Pride and Prejudice",
    author: "Jane Austen",
    publisher: "T. Egerton",
    copies: 7,
    language: "English",
  },
  {
    id: "3a678bcc-df32-4e9d-b0f2-3b9fd2d0b74b",
    bookTitle: "The Alchemist",
    author: "Paulo Coelho",
    publisher: "HarperCollins",
    copies: 20,
    language: "Portuguese",
  },
  {
    id: "1a7f3b2f-4f19-463b-bdf4-e37299d9e4fe",
    bookTitle: "Moby-Dick",
    author: "Herman Melville",
    publisher: "Richard Bentley",
    copies: 10,
    language: "English",
  },
];

const BookTable = () => {
  return (
    <div>
      <HeaderBookTable />
      <div className="overflow-x-auto mt-10 mb-10">
        <table className="w-full text-sm text-left text-gray-500   ">
          <thead className="text-xs   uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-4 py-3">
                Book Title
              </th>
              <th scope="col" className="px-4 py-3">
                Author
              </th>
              <th scope="col" className="px-4 py-3">
                Publisher
              </th>
              <th scope="col" className="px-4 py-3">
                Copies
              </th>
              <th scope="col" className="px-4 py-3">
                Language
              </th>

              <th scope="col" className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bookData.map((data) => (
              <tr key={data.id} className=" nth-[odd]:bg-gray-100 ">
                <td className="px-4 py-3">{data.bookTitle}</td>
                <td className="px-4 py-3">{data.author}</td>
                <td className="px-4 py-3">{data.publisher}</td>
                <td className="px-4 py-3">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-full  dark:text-indigo-500">
                    {data.copies}
                  </span>{" "}
                </td>

                <td className="px-4 py-3">{data.language}</td>
                <td className="px-4 py-3">
                  <div className=" flex gap-1 text-sm">
                    <Link
                      className="hover:bg-gray-200 p-1 rounded-full transition-all "
                      href={`/admin/Librarian/${data.id}/edit`}
                    >
                      <UserRoundPen size={19} />
                    </Link>{" "}
                    <Link
                      className="hover:bg-gray-200 p-1 rounded-full transition-all "
                      href={`/admin/Librarian/${data.id}/delet`}
                    >
                      <Trash2 size={19} color="#ff000098" />
                    </Link>
                    <Link
                      className="hover:bg-gray-200 p-1 rounded-full transition-all "
                      href={`/admin/Librarian/${data.id}/view`}
                    >
                      <View size={19} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
            {/* <tr className=" nth-[odd]:bg-gray-100 ">
              <td className="px-4 py-3">Iraguha Patrick</td>
              <td className="px-4 py-3">IraguhaPatrick@gmail.com</td>
              <td className="px-4 py-3">+250 786914904</td>
              <td className="px-4 py-3">Director</td>
              <td className="px-4 py-3">
                <Badge size="1" color="red">
                  Inactive
                </Badge>
              </td>
              <td className="px-4 py-3">23/03/2024</td>
              <td className="px-4 py-3">
                <div className=" flex gap-1 text-sm">
                  <Link
                    className="hover:bg-gray-200 p-1 rounded-full transition-all "
                    href={"/admin/Librarian/3/edit"}
                  >
                    <UserRoundPen size={19} />
                  </Link>{" "}
                  <Link
                    className="hover:bg-gray-200 p-1 rounded-full transition-all "
                    href={"/admin/Librarian/3/delet "}
                  >
                    <Trash2 size={19} color="#ff000098" />
                  </Link>
                  <Link
                    className="hover:bg-gray-200 p-1 rounded-full transition-all "
                    href={"/admin/Librarian/3/delet"}
                  >
                    <View size={19} />
                  </Link>
                </div>
              </td>
            </tr>
            <tr className=" nth-[odd]:bg-gray-100 ">
              <td className="px-4 py-3">Iraguha Patrick</td>
              <td className="px-4 py-3">IraguhaPatrick@gmail.com</td>
              <td className="px-4 py-3">+250 786914904</td>
              <td className="px-4 py-3">Director</td>
              <td className="px-4 py-3">
                <Badge size="1" color="green">
                  Active
                </Badge>
              </td>
              <td className="px-4 py-3">23/03/2024</td>
              <td className="px-4 py-3">
                <div className=" flex gap-1 text-sm">
                  <Link
                    className="hover:bg-gray-200 p-1 rounded-full transition-all "
                    href={"/admin/Librarian/4/edit"}
                  >
                    <UserRoundPen size={19} />
                  </Link>

                  <Link
                    className="hover:bg-gray-200 p-1 rounded-full transition-all "
                    href={"/admin/Librarian/4/delet"}
                  >
                    <Trash2 size={19} color="#ff000098" />
                  </Link>

                  <Link
                    className="hover:bg-gray-200 p-1 rounded-full transition-all "
                    href={"/admin/Librarian/4/view"}
                  >
                    <View size={19} />
                  </Link>
                </div>
              </td>
            </tr>
            <tr className=" nth-[odd]:bg-gray-100 ">
              <td className="px-4 py-3">Iraguha Patrick</td>
              <td className="px-4 py-3">IraguhaPatrick@gmail.com</td>
              <td className="px-4 py-3">+250 786914904</td>
              <td className="px-4 py-3">Director</td>
              <td className="px-4 py-3">
                <Badge size="1" color="red">
                  Inactive
                </Badge>
              </td>
              <td className="px-4 py-3">23/03/2024</td>
              <td className="px-4 py-3">
                <div className=" flex gap-1 text-sm">
                  <Link
                    className="hover:bg-gray-200 p-1 rounded-full transition-all "
                    href={"/admin/Librarian/5/edit"}
                  >
                    <UserRoundPen size={19} />
                  </Link>

                  <Link
                    className="hover:bg-gray-200 p-1 rounded-full transition-all "
                    href={"/admin/Librarian/5/delet"}
                  >
                    <Trash2 size={19} color="#ff000098" />
                  </Link>
                  <Link
                    className="hover:bg-gray-200 p-1 rounded-full transition-all "
                    href={"/admin/Librarian/5/view"}
                  >
                    <View size={19} />
                  </Link>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <FooterBookTable />
    </div>
  );
};

export default BookTable;
