import { LibraryBig, UsersRound, BookCopy, BookCheck } from "lucide-react";
import React from "react";

const VeiwCard = () => {
  return (
    <div>
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
    </div>
  );
};

export default VeiwCard;
