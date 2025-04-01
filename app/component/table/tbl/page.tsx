import React from "react";
import HeaderTable from "../header/page";
import FooterTable from "../footer/page";
import Link from "next/link";
import { Badge } from "@radix-ui/themes";
import { UserRoundPen, Trash2, View } from "lucide-react";
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

const Table = () => {
  return (
    <div>
      <HeaderTable />
      <div className="overflow-x-auto mt-10 mb-10">
        <table className="w-full text-sm text-left text-gray-500   ">
          <thead className="text-xs   uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-4 py-3">
                Librarian name
              </th>
              <th scope="col" className="px-4 py-3">
                Email
              </th>
              <th scope="col" className="px-4 py-3">
                Phone
              </th>
              <th scope="col" className="px-4 py-3">
                Role
              </th>
              <th scope="col" className="px-4 py-3">
                Status
              </th>
              <th scope="col" className="px-4 py-3">
                Date Added
              </th>
              <th scope="col" className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((data) => (
              <tr className=" nth-[odd]:bg-gray-100 ">
                <td className="px-4 py-3">{data.name}</td>
                <td className="px-4 py-3">{data.email}</td>
                <td className="px-4 py-3">{data.phone}</td>
                <td className="px-4 py-3">{data.position}</td>
                <td className="px-4 py-3">
                  <Badge
                    size="1"
                    color={data.status.text == "Inactive" ? "red" : "green"}
                  >
                    {data.status.text}
                  </Badge>
                </td>
                <td className="px-4 py-3">{data.date}</td>
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
      <FooterTable />
    </div>
  );
};

export default Table;
