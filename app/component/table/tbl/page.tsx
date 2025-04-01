import React from "react";
import HeaderTable from "../header/page";
import FooterTable from "../footer/page";
import Link from "next/link";
import { Badge } from "@radix-ui/themes";
import { UserRoundPen, Trash2, View } from "lucide-react";

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
            </tr>
          </tbody>
        </table>
      </div>
      <FooterTable />
    </div>
  );
};

export default Table;
