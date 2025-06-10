"use server";
import React from "react";

// import Table from "../../component/table/tbl/page";
// import useAuthGuard from "../../middlwere/AdminGuid/page";

import Table from "@/app/component/table/tbl/page";

const Library = () => {
  return (
    <div className="  ">
      <h1 className="mt-5 mb-5 text-xl">Librarian </h1>

      {/* <div className="bg-indigo-0 grid grid-cols-1  md:grid-cols-3 p-2 gap-6  min-h-auto mt-10 mb-20">
        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-amber-500 text-amber-300 p-4 rounded-full ">
            <UsersRound />
          </div>
          <div>
            <h1 className="text-sm uppercase ">Total Librarian</h1>
            <p className="font-medium text-xl">334</p>
          </div>
        </div>

        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-green-600 text-green-300 p-4 rounded-full ">
            <UserCheck />
          </div>
          <div>
            <h1 className="text-sm uppercase ">Active Librarians</h1>
            <p className="font-medium text-xl">4</p>
          </div>
        </div>

        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-red-400 text-red-100 p-4 rounded-full ">
            <UserMinus />
          </div>
          <div>
            <h1 className="text-sm uppercase ">Inactive Librarians</h1>
            <p className="font-medium text-xl">0</p>
          </div>
        </div>
      </div> */}
      {/* <h1 className="mt-5 mb-5 text-xl">View </h1> */}
      <Table />
    </div>
  );
};

export default Library;
