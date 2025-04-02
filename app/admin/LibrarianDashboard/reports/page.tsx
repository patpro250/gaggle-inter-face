import { Select } from "@radix-ui/themes";
import { ArchiveRestore, Search, SquareKanban, UserCheck } from "lucide-react";
import React from "react";
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    copies: 12,
    doneOn: "2025-01-10",
  },
  {
    title: "1984",
    author: "George Orwell",
    copies: 8,
    doneOn: "2024-12-15",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    copies: 15,
    doneOn: "2025-02-01",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    copies: 10,
    doneOn: "2024-11-25",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    copies: 7,
    doneOn: "2025-03-05",
  },
];
const LibrarianReport = () => {
  return (
    <div className="py-5 overflow-hidden">
      {/* 1 */}
      <div>
        <h1 className="text-2xl ms-6 text-gray-700 font-medium mt-3 mb-3">
          Member Overview
        </h1>
        <div className="grid mb-10 place-items-center grid-cols-1 xl:grid-cols-4 gap-10 bg-gray-0 p-2 ">
          <div className="bg-gray-0 grid-cols-subgrid col-auto xl:col-span-3 overflow-x-scroll xl:overflow-hidden ">
            {/* header table */}
            <div className=" flex flex-col md:flex-row p-3 justify-items-center md:justify-between  gap-5  ">
              {/* form */}
              <div>
                <form action="" className="w-full md:w-auto">
                  <div className="relative bg-amber-0 w-full md:w-auto ">
                    <div className=" absolute left-2 text-gray-700 top-3">
                      <Search size={20} />
                    </div>
                    <input
                      className=" border-1 w-full md:w-auto outline-0 focus:border-1 focus:border-indigo-600 border-gray-200 rounded-md p-2 ps-8 "
                      type="text"
                      placeholder="Search.."
                    />
                  </div>
                </form>
              </div>
              {/* filter */}
              <div>
                <select
                  className="bg-gray-50 border outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-1 focus:border-indigo-600 block w-full p-2.5"
                  id=""
                >
                  <option value="">Active</option>
                  <option value="">InActive</option>
                </select>
              </div>
            </div>
            {/* Table */}
            <div>
              <table className="w-full text-sm text-left text-gray-500   ">
                <thead className="text-xs   uppercase bg-gray-100  ">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Location
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Join Data
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="nth-[even]:bg-gray-100">
                    <td scope="col" className="px-4 py-2">
                      John Doe
                    </td>
                    <td scope="col" className="px-4 py-2">
                      New York
                    </td>
                    <td scope="col" className="px-4 py-2">
                      (123) 456-7890
                    </td>
                    <td scope="col" className="px-4 py-2">
                      john.doe@example.com
                    </td>
                    <td scope="col" className="px-4 py-2">
                      Active
                    </td>
                    <td scope="col" className="px-4 py-2">
                      2023-05-14
                    </td>
                  </tr>
                  <tr className="nth-[even]:bg-gray-100">
                    <td scope="col" className="px-4 py-2">
                      Jane Smith
                    </td>
                    <td scope="col" className="px-4 py-2">
                      Los Angeles
                    </td>
                    <td scope="col" className="px-4 py-2">
                      (987) 654-3210
                    </td>
                    <td scope="col" className="px-4 py-2">
                      jane.smith@example.com
                    </td>
                    <td scope="col" className="px-4 py-2">
                      Inactive
                    </td>
                    <td scope="col" className="px-4 py-2">
                      2021-08-22
                    </td>
                  </tr>
                  <tr className="nth-[even]:bg-gray-100">
                    <td scope="col" className="px-4 py-2">
                      Mike Johnson
                    </td>
                    <td scope="col" className="px-4 py-2">
                      Chicago
                    </td>
                    <td scope="col" className="px-4 py-2">
                      (555) 123-4567
                    </td>
                    <td scope="col" className="px-4 py-2">
                      mike.johnson@example.com
                    </td>
                    <td scope="col" className="px-4 py-2">
                      Active
                    </td>
                    <td scope="col" className="px-4 py-2">
                      2022-11-10
                    </td>
                  </tr>
                  <tr className="nth-[even]:bg-gray-100">
                    <td scope="col" className="px-4 py-2">
                      Emily Davis
                    </td>
                    <td scope="col" className="px-4 py-2">
                      San Francisco
                    </td>
                    <td scope="col" className="px-4 py-2">
                      (444) 987-6543
                    </td>
                    <td scope="col" className="px-4 py-2">
                      emily.davis@example.com
                    </td>
                    <td scope="col" className="px-4 py-2">
                      Active
                    </td>
                    <td scope="col" className="px-4 py-2">
                      2024-01-30
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-indigo-0  p-3 h-40 w-full ">
            <div className="bg-gray-0">
              <h1 className="text-xl text-gray-700 font-medium mt-3 mb-3">
                Member Statistic
              </h1>
            </div>
            <div className="border-l-2 ps-2 border-gray-200">
              <ul className="list-none text-gray-700 font-normal text-sm flex flex-col gap-2">
                <li>
                  Total :{" "}
                  <span className="ms-6 font-medium bg-indigo-100 px-1 rounded-md ">
                    200
                  </span>
                </li>
                <li className="flex gap-1 items-center">
                  <div className="h-3 w-3 rounded-full bg-green-400"> </div>{" "}
                  Active :{" "}
                  <span className="ms-6 font-medium bg-indigo-100 px-1 rounded-md ">
                    200
                  </span>
                </li>
                <li className="flex gap-1 items-center">
                  <div className="h-3 w-3 rounded-full bg-red-400"> </div>{" "}
                  InActive :{" "}
                  <span className="ms-6 font-medium bg-indigo-100 px-1 rounded-md ">
                    200
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}

      <div>
        <h1 className="text-2xl ms-6 text-gray-700 font-medium mt-3 mb-3">
          Student Overview
        </h1>
        <div className="grid mb-10 place-items-center grid-cols-1 xl:grid-cols-4 gap-10 bg-gray-0 p-2 ">
          <div className="bg-gray-0 grid-cols-subgrid col-auto xl:col-span-3 overflow-x-scroll xl:overflow-hidden ">
            {/* header table */}
            <div className=" flex flex-col md:flex-row p-3 justify-items-center md:justify-between  gap-5  ">
              {/* form */}
              <div>
                <form action="" className="w-full md:w-auto">
                  <div className="relative bg-amber-0 w-full md:w-auto ">
                    <div className=" absolute left-2 text-gray-700 top-3">
                      <Search size={20} />
                    </div>
                    <input
                      className=" border-1 w-full md:w-auto outline-0 focus:border-1 focus:border-indigo-600 border-gray-200 rounded-md p-2 ps-8 "
                      type="text"
                      placeholder="Search.."
                    />
                  </div>
                </form>
              </div>
              {/* filter */}
              <div>
                <select
                  className="bg-gray-50 border outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-1 focus:border-indigo-600 block w-full p-2.5"
                  id=""
                >
                  <option value="S1A">All</option>
                  <option value="S1A">S1A</option>
                  <option value="S2A">S2A</option>
                  <option value="S3A">S3A</option>
                  <option value="B1A">B1A</option>
                  <option value="B2A">B2A</option>
                  <option value="B3A">B3A</option>
                </select>
              </div>
            </div>
            {/* Table */}
            <div>
              <table className="w-full text-sm text-left text-gray-500   ">
                <thead className="text-xs   uppercase bg-gray-100  ">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Location
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Join Data
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="nth-[even]:bg-gray-100">
                    <td scope="col" className="px-4 py-2">
                      John Doe
                    </td>
                    <td scope="col" className="px-4 py-2">
                      New York
                    </td>
                    <td scope="col" className="px-4 py-2">
                      (123) 456-7890
                    </td>
                    <td scope="col" className="px-4 py-2">
                      john.doe@example.com
                    </td>
                    <td scope="col" className="px-4 py-2">
                      Active
                    </td>
                    <td scope="col" className="px-4 py-2">
                      2023-05-14
                    </td>
                  </tr>
                  <tr className="nth-[even]:bg-gray-100">
                    <td scope="col" className="px-4 py-2">
                      Jane Smith
                    </td>
                    <td scope="col" className="px-4 py-2">
                      Los Angeles
                    </td>
                    <td scope="col" className="px-4 py-2">
                      (987) 654-3210
                    </td>
                    <td scope="col" className="px-4 py-2">
                      jane.smith@example.com
                    </td>
                    <td scope="col" className="px-4 py-2">
                      Inactive
                    </td>
                    <td scope="col" className="px-4 py-2">
                      2021-08-22
                    </td>
                  </tr>
                  <tr className="nth-[even]:bg-gray-100">
                    <td scope="col" className="px-4 py-2">
                      Mike Johnson
                    </td>
                    <td scope="col" className="px-4 py-2">
                      Chicago
                    </td>
                    <td scope="col" className="px-4 py-2">
                      (555) 123-4567
                    </td>
                    <td scope="col" className="px-4 py-2">
                      mike.johnson@example.com
                    </td>
                    <td scope="col" className="px-4 py-2">
                      Active
                    </td>
                    <td scope="col" className="px-4 py-2">
                      2022-11-10
                    </td>
                  </tr>
                  <tr className="nth-[even]:bg-gray-100">
                    <td scope="col" className="px-4 py-2">
                      Emily Davis
                    </td>
                    <td scope="col" className="px-4 py-2">
                      San Francisco
                    </td>
                    <td scope="col" className="px-4 py-2">
                      (444) 987-6543
                    </td>
                    <td scope="col" className="px-4 py-2">
                      emily.davis@example.com
                    </td>
                    <td scope="col" className="px-4 py-2">
                      Active
                    </td>
                    <td scope="col" className="px-4 py-2">
                      2024-01-30
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-indigo-0  p-3 h-40 w-full ">
            <div className="bg-gray-0">
              <h1 className="text-xl text-gray-700 font-medium mt-3 mb-3">
                Student Statistic
              </h1>
            </div>
            <div className="border-l-2 ps-2 border-gray-200">
              <ul className="list-none text-gray-700 font-normal text-sm flex flex-col gap-2">
                <li>
                  Total :{" "}
                  <span className="ms-6 font-medium bg-indigo-100 px-1 rounded-md ">
                    200
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}

      <div>
        <h1 className="text-2xl ms-6 text-gray-700 font-medium mt-3 mb-3">
          Recent Added Book
        </h1>
        <div className="grid mb-10  grid-cols-1 xl:grid-cols-6 bg-gray-0 gap-4 bg-gray-0 p-2 ">
          <div className="bg-gray-0  col-auto xl:col-span-4 overflow-x-scroll xl:overflow-hidden ">
            {/* Table */}
            <div>
              <table className="w-full text-sm text-left text-gray-500   ">
                <thead className="text-xs   uppercase bg-gray-100  ">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Book Title
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Author
                    </th>
                    <th scope="col" className="px-4 py-3">
                      copies
                    </th>

                    <th scope="col" className="px-4 py-3">
                      Done On
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((data03) => (
                    <tr className="nth-[even]:bg-gray-100">
                      <td scope="col" className="px-4 py-2">
                        {data03.title}
                      </td>
                      <td scope="col" className="px-4 py-2">
                        {data03.author}
                      </td>
                      <td scope="col" className="px-4 py-2">
                        {data03.copies}
                      </td>

                      <td scope="col" className="px-4 py-2">
                        {data03.doneOn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-indigo-0 grid grid-cols-auto xl:grid-cols-2   p-3 min-h-60 gap-1 xl:col-span-2 border-1 border-gray-200 rounded-md bg-amber-0 w-full">
            {/* 1 */}
            <div className="flex items-center justify-center min-h-25 border-1 bg-green-0  border-gray-200 rounded-md">
              <div className="bg-amber-0   ">
                <div className="flex space-x-3 items-center  ">
                  <div className=" p-2 bg-indigo-100 rounded-full text-indigo-400">
                    <ArchiveRestore />
                  </div>
                  <h1 className=" text-gray-700 font-medium ">Total Books</h1>
                </div>
                <div className=" text-right p-2 bg-amber-0">
                  <h1 className="text-2xl text-gray-700 font-bold ">77,777</h1>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex items-center justify-center min-h-25 border-1 bg-green-0  border-gray-200 rounded-md">
              <div className="bg-amber-0   ">
                <div className="flex space-x-3 items-center  ">
                  <div className=" p-2 bg-green-100 rounded-full text-green-400">
                    <UserCheck />
                  </div>
                  <h1 className=" text-gray-700 font-medium ">Borrowed</h1>
                </div>
                <div className=" text-right p-2 bg-amber-0">
                  <h1 className="text-2xl text-gray-700 font-bold ">2345</h1>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="flex items-center justify-center grid-cols-auto xl:col-span-2  min-h-25 border-1 bg-green-0  border-gray-200 rounded-md">
              <div className="bg-amber-0   ">
                <div className="flex space-x-3 items-center  ">
                  <div className=" p-2 bg-amber-100 rounded-full text-amber-400">
                    <SquareKanban />
                  </div>
                  <h1 className=" text-gray-700 font-medium ">OverDue Books</h1>
                </div>
                <div className=" text-center xl:text-center p-2 bg-amber-0">
                  <h1 className="text-2xl text-gray-700 font-bold ">0674</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarianReport;
