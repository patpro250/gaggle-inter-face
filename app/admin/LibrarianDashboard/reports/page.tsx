import { Badge, Select } from "@radix-ui/themes";
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

const dummyData = [
  {
    name: "Iraguha Patrick",
    email: "Iraguha@gmail.com",
    status: "Active",
  },
  {
    name: "John Doe",
    email: "john.doe@gmail.com",
    status: "Inactive",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@gmail.com",
    status: "Active",
  },
  {
    name: "Alex Johnson",
    email: "alex.johnson@gmail.com",
    status: "Active",
  },
  {
    name: "Emily Davis",
    email: "emily.davis@gmail.com",
    status: "Active",
  },
  {
    name: "David Wilson",
    email: "david.wilson@gmail.com",
    status: "Inactive",
  },
  {
    name: "Olivia Taylor",
    email: "olivia.taylor@gmail.com",
    status: "Active",
  },
  {
    name: "Michael Brown",
    email: "michael.brown@gmail.com",
    status: "Active",
  },
  {
    name: "Sophia Miller",
    email: "sophia.miller@gmail.com",
    status: "Active",
  },
  {
    name: "Liam Lee",
    email: "liam.lee@gmail.com",
    status: "Active",
  },
  {
    name: "Isabella Martinez",
    email: "isabella.martinez@gmail.com",
    status: "Active",
  },
  {
    name: "Noah Harris",
    email: "noah.harris@gmail.com",
    status: "Inactive",
  },
  {
    name: "Mia King",
    email: "mia.king@gmail.com",
    status: "Active",
  },
  {
    name: "Lucas Scott",
    email: "lucas.scott@gmail.com",
    status: "Active",
  },
  {
    name: "Amelia Clark",
    email: "amelia.clark@gmail.com",
    status: "Inactive",
  },
  {
    name: "James Walker",
    email: "james.walker@gmail.com",
    status: "Active",
  },
  {
    name: "Charlotte Lewis",
    email: "charlotte.lewis@gmail.com",
    status: "Active",
  },
  {
    name: "Ethan Walker",
    email: "ethan.walker@gmail.com",
    status: "Active",
  },
  {
    name: "Grace Allen",
    email: "grace.allen@gmail.com",
    status: "Inactive",
  },
  {
    name: "Benjamin Harris",
    email: "benjamin.harris@gmail.com",
    status: "Inactive",
  },
];

const Reserver = [
  {
    name: "The Great Gatsby",
    email: "fscott@fitzgerald.com",
    authorName: "F. Scott Fitzgerald", // New author name
    publisher: "Scribner",
    copyCode: "GAT12345",
    libraryName: "Central City Library",
  },
  {
    name: "1984",
    email: "george@orwell.com",
    authorName: "George Orwell", // New author name
    publisher: "Secker & Warburg",
    copyCode: "ORW12345",
    libraryName: "Downtown Library",
  },
  {
    name: "To Kill a Mockingbird",
    email: "harper@lee.com",
    authorName: "Harper Lee", // New author name
    publisher: "J.B. Lippincott & Co.",
    copyCode: "TKM12345",
    libraryName: "Northside Branch",
  },
  {
    name: "Moby-Dick",
    email: "herman@melville.com",
    authorName: "Herman Melville", // New author name
    publisher: "Harper & Brothers",
    copyCode: "MD12345",
    libraryName: "West End Library",
  },
];

const LibrarianReport = () => {
  return (
    <div className="py-5 overflow-hidden">
      <div>
        <h1 className="mt-5 mb-5 text-xl">Librarian && Reservation Book</h1>
        <div className="grid mb-10  grid-cols-1 xl:grid-cols-6 bg-gray-0 gap-4 bg-gray-0 p-2 ">
          <div className="bg-indigo-0 flex flex-col overflow-hidden    p-0 h-70 gap-1 xl:col-span-3 border-1 border-gray-200 rounded-md bg-amber-0 w-full">
            {/* Table */}
            <h1 className="text-xl text-gray-700 font-normal p-2 ">
              Librarian
            </h1>

            <div className="bg-amber-0 h-full overflow-y-auto">
              {dummyData.map((data1) => (
                <div
                  key={data1.email}
                  className=" bg-white shadow-3xl mt-2 mb-2 border-1 p-2 border-gray-200 rounded-md m-2 "
                >
                  <h1 className="text-md m-1 text-gray-700 font-normal ">
                    <span className="font-medium">Name : </span> {data1.name}
                  </h1>
                  <h1 className="text-md m-1 text-gray-700 font-normal ">
                    <span className="font-medium">Email :</span> {data1.email}
                  </h1>
                  <h1 className="text-md m-1 text-gray-700">
                    <span className="font-medium">Status : </span>

                    <span>
                      <Badge
                        color={`${data1.status == "Active" ? "green" : "red"}`}
                      >
                        {data1.status}{" "}
                      </Badge>
                    </span>
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-indigo-0  overflow-hidden   p-3 h-70  gap-1 xl:col-span-3 border-1 border-gray-200 rounded-md bg-amber-0 w-full">
            <h1 className="text-xl text-gray-700 font-normal p-2 ">
              Reservation Book
            </h1>
            <div className="bg-amber-0 h-60 pb-10 pt-5 overflow-y-auto">
              {Reserver.map((data1) => (
                <div
                  key={data1.email}
                  className=" bg-white shadow-3xl mt-2 mb-2 border-1 p-2 border-gray-200 rounded-md m-2 "
                >
                  <h1 className="text-md m-1 text-gray-700 font-normal ">
                    <span className="font-medium">Book Title : </span>{" "}
                    {data1.name}
                  </h1>
                  <h1 className="text-md m-1 text-gray-700 font-normal ">
                    <span className="font-medium">Author :</span>{" "}
                    {data1.authorName}
                  </h1>
                  <h1 className="text-md m-1 text-gray-700 font-normal ">
                    <span className="font-medium">Publisher :</span>{" "}
                    {data1.publisher}
                  </h1>
                  <h1 className="text-md m-1 text-gray-700 font-normal ">
                    <span className="font-medium">Copy Code :</span>{" "}
                    {data1.copyCode}
                  </h1>
                  <h1 className="text-md m-1 text-gray-700 font-normal ">
                    <span className="font-medium">Library Name :</span>{" "}
                    {data1.libraryName}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarianReport;
