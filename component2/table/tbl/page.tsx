import { Badge } from "@radix-ui/themes";
import { BookCheck, CircleSlash } from "lucide-react";
import Link from "next/link";
<BookCheck />;
<CircleSlash />;

import { getApiClient } from "@/app/g/schools/axios";
export interface Librarian {
  [x: string]: unknown; // Use a more specific type if you know the structure
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string; // Add other roles if you want
  status: string; // Add other statuses if you want
  librarianId: string;
  profile: null | unknown; // Change `any` to a specific type if you know the structure of `profile`
}

const Table = async () => {
  const api = await getApiClient(); // This is safe inside SWR
  const { data: nm } = await api.get<Librarian[]>("/librarians");

  return (
    <div>
      {/* <HeaderTable /> */}

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
                    {/* <Link
                      className="hover:bg-green-500 hover:text-white ease-in-out text-gray-600  border-1 border-gray-200 flex justify-center items-center h-5 w-5 bg-amber-0 rounded-full transition-all "
                      href={`/d/admin/Librarian/${data.librarianId}/unactivate`}
                    >
                      <CircleSlash size={13} color="#ff000098" />
                    </Link> */}
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
      {/* <FooterTable /> */}
    </div>
  );
};

export default Table;
