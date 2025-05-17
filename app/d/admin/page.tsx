"use client";

import { usePathname, useRouter } from "next/navigation";
import { Sparklines, SparklinesLine } from "react-sparklines";

import { BookCheck, BookCopy, LibraryBig, UsersRound } from "lucide-react";
import Graph from "@/app/component/graphBar/page";
import LineChartComponent from "@/app/component/graphLine/page";

const NavBarAdmin = () => {
  const path = usePathname();
  const isValid = ["/librarian", "/home", "/page"];
  const Real = isValid.includes(path);
  return (
    <div className="pb-50">
      <h1 className="m-5 text-xl">Dashboard </h1>

      <div className="bg-indigo-0 grid grid-cols-1  md:grid-cols-3 p-2 gap-6  min-h-60">
        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-amber-500 text-amber-300 p-4 rounded-full ">
            <LibraryBig />
          </div>
          <div>
            <h1 className="text-sm uppercase ">Total Book</h1>
            <p className="font-medium text-xl">334</p>
          </div>
        </div>

        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-green-600 text-green-300 p-4 rounded-full ">
            <UsersRound />
          </div>
          <div>
            <h1 className="text-sm uppercase ">Total Librarians</h1>
            <p className="font-medium text-xl">4</p>
          </div>
        </div>

        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-indigo-600 text-indigo-300 p-4 rounded-full ">
            <BookCopy />
          </div>
          <div>
            <h1 className="text-sm uppercase ">Issued Book</h1>
            <p className="font-medium text-xl">104</p>
          </div>
        </div>

        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-sky-500 text-sky-300 p-4 rounded-full ">
            <BookCheck />
          </div>
          <div>
            <h1 className="text-sm uppercase ">Available Books</h1>
            <p className="font-medium text-xl">79084</p>
          </div>
        </div>

        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-cyan-600 text-cyan-300 p-4 rounded-full ">
            <BookCopy />
          </div>
          <div>
            <h1 className="text-sm uppercase ">Total Books Copies</h1>
            <p className="font-medium text-xl">334</p>
          </div>
        </div>
      </div>

      {/* analyse */}
      <h1 className="m-5 text-xl">Analytics </h1>

      <div className="bg-indigo-0 grid grid-cols-1  xl:grid-cols-2 p-2 gap-4  min-h-60">
        <div>
          <Graph />
        </div>

        <div className="bg-green-0">
          <LineChartComponent />
        </div>
      </div>
    </div>
  );
};

export default NavBarAdmin;
