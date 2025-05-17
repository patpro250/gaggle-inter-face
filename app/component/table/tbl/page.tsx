import React from "react";
import HeaderTable from "../header/page";
import FooterTable from "../footer/page";
import Link from "next/link";
import { Badge } from "@radix-ui/themes";
import {
  UserRoundPen,
  Trash2,
  View,
  BookCheck,
  CircleSlash,
} from "lucide-react";
<BookCheck />;
<CircleSlash />;

import { getApiClient } from "@/app/g/schools/axios";
interface Librarian {
  [x: string]: any;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string; // Add other roles if you want
  status: string; // Add other statuses if you want
  librarianId: string;
  profile: null | any; // Change `any` to a specific type if you know the structure of `profile`
}

const dummyData = [
  {
    id: "a4e0bc52-bac4-4f69-9d95-bad9ff4d85b4",
    name: "Iraguha Patrick",
    email: "IraguhaPatrick@gmail.com",
    phone: "+250 786914904",
    position: "Director",
    status: {
      text: "Inactive",
      color: "red",
      size: "1",
    },
    date: "23/03/2024",
  },
  {
    id: "5d9247d3-c4c4-4296-9355-7a9a9c99a624",
    name: "Alice Mukamana",
    email: "alice.mukamana@gmail.com",
    phone: "+250 789654321",
    position: "Manager",
    status: {
      text: "Active",
      color: "green",
      size: "1",
    },
    date: "18/02/2024",
  },
  {
    id: "9b6d10f9-5b35-4e7e-aef2-f4623f8f4c93",
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+250 788123456",
    position: "Engineer",
    status: {
      text: "Inactive",
      color: "red",
      size: "1",
    },
    date: "12/01/2024",
  },
  {
    id: "fa4a4fe9-0725-4645-8db6-5cb3510f39c1",
    name: "Maria Niyonsaba",
    email: "maria.niyonsaba@example.com",
    phone: "+250 786563789",
    position: "HR Specialist",
    status: {
      text: "Active",
      color: "green",
      size: "1",
    },
    date: "09/03/2024",
  },
  {
    id: "dbac97d4-b7c8-4388-8b3d-e6a2e4511e5f",
    name: "James Kamanzi",
    email: "james.kamanzi@company.com",
    phone: "+250 788987654",
    position: "Developer",
    status: {
      text: "Inactive",
      color: "red",
      size: "1",
    },
    date: "05/02/2024",
  },
  {
    id: "3a678bcc-df32-4e9d-b0f2-3b9fd2d0b74b",
    name: "Chantal Uwase",
    email: "chantal.uwase@gmail.com",
    phone: "+250 781234567",
    position: "Assistant",
    status: {
      text: "Active",
      color: "green",
      size: "1",
    },
    date: "19/02/2024",
  },
  {
    id: "1a7f3b2f-4f19-463b-bdf4-e37299d9e4fe",
    name: "Eric Nyiramana",
    email: "eric.nyiramana@example.com",
    phone: "+250 783456789",
    position: "Consultant",
    status: {
      text: "Inactive",
      color: "red",
      size: "1",
    },
    date: "28/03/2024",
  },
];

const Table = async () => {
  const api = await getApiClient(); // This is safe inside SWR
  const { data: nm } = await api.get<Librarian>("/librarians");
  console.log(nm);
  return (
    <div>
      <HeaderTable />

      <div className="overflow-x-auto mt-10 mb-10">
        <table className="w-full !text-[14px] text-left text-gray-600  border-1 border-gray-200 !rounded-md  ">
          <thead className="text-[10px] border-1 border-gray-200   uppercase bg-gray-0  ">
            <tr>
              <th scope="col" className="px-4 py-2">
                Librarian name
              </th>
              <th scope="col" className="px-4 py-2">
                Email
              </th>
              <th scope="col" className="px-4 py-2">
                Phone
              </th>
              <th scope="col" className="px-4 py-2">
                Role
              </th>
              <th scope="col" className="px-4 py-2">
                Status
              </th>
              {/* <th scope="col" className="px-4 py-2">
                Date Added
              </th> */}
              <th scope="col" className="px-4 py-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {nm.map((data: Librarian) => (
              <tr
                key={data.librarianId}
                className=" nth-[even]:bg-gray-0 border-b-1 border-gray-200 "
              >
                <td className="px-4 py-2 text-[13px]">
                  {data.firstName} {data.lastName}
                </td>
                <td className="px-4 py-2 text-[13px]">{data.email}</td>
                <td className="px-4 py-2 text-[13px]">{data.phone}</td>
                <td className="px-4 py-2 text-[13px]">{data.role}</td>
                <td className="px-4 py-2 text-[13px]">
                  <Badge
                    size="1"
                    color={data.status == "PENDING" ? "orange" : "green"}
                  >
                    {data.status}
                  </Badge>
                </td>
                {/* <td className="px-4 py-2 text-[13px]">{data.date}</td> */}
                <td className="px-4 py-2">
                  <div className=" flex gap-1 text-[13px]">
                    <Link
                      className="hover:bg-green-500 hover:text-white ease-in-out text-gray-600  border-1 border-gray-200 flex justify-center items-center h-5 w-5 bg-amber-0 rounded-full transition-all "
                      href={`/d/admin/Librarian/${data.librarianId}/approve`}
                    >
                      <BookCheck size={13} />
                    </Link>{" "}
                    <Link
                      className="hover:bg-green-500 hover:text-white ease-in-out text-gray-600  border-1 border-gray-200 flex justify-center items-center h-5 w-5 bg-amber-0 rounded-full transition-all "
                      href={`/d/admin/Librarian/${data.librarianId}/unactivate`}
                    >
                      <CircleSlash size={13} color="#ff000098" />
                    </Link>
                    {/* <Link
                      className="hover:bg-green-500 hover:text-white ease-in-out text-gray-600  border-1 border-gray-200 flex justify-center items-center h-5 w-5 bg-amber-0 rounded-full transition-all "
                      href={`/d/admin/Librarian/${data.librarianId}/view`}
                    >
                      <View size={13} />
                    </Link> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FooterTable />
    </div>
  );
};

export default Table;
