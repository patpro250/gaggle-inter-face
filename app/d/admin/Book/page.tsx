import React from "react";
import BookTable from "../../component/tableBooks/tbl/page";
import useAuthGuard from "../../middlwere/AdminGuid/page";
import {
  UsersRound,
  UserCheck,
  UserMinus,
  BookmarkCheck,
  Loader,
  BookmarkX,
  ArrowRightLeft,
  FileArchive,
  GitPullRequestDraft,
} from "lucide-react";

const BookPage = () => {
  return (
    <div className=" p-4 pb-30 ">
      <h1 className="mt-5 mb-5 text-xl">Books </h1>

      <div className="bg-indigo-0 grid grid-cols-1  md:grid-cols-3 p-2 gap-6  min-h-auto mt-10 mb-20">
        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-indigo-500 text-indigo-300 p-4 rounded-full ">
            <BookmarkCheck />
          </div>
          <div>
            <h1 className="text-sm uppercase ">Available</h1>
            <p className="font-medium text-xl">334</p>
          </div>
        </div>

        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-green-600 text-green-300 p-4 rounded-full ">
            <UserCheck />
          </div>
          <div>
            <h1 className="text-sm uppercase ">Reserved</h1>
            <p className="font-medium text-xl">4</p>
          </div>
        </div>

        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-sky-400 text-sky-100 p-4 rounded-full ">
            <FileArchive />
          </div>
          <div>
            <h1 className="text-sm uppercase ">In Archive</h1>
            <p className="font-medium text-xl">0</p>
          </div>
        </div>

        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-green-400 text-green-200 p-4 rounded-full ">
            <Loader />
          </div>
          <div>
            <h1 className="text-sm uppercase ">Processing Book</h1>
            <p className="font-medium text-xl">0</p>
          </div>
        </div>

        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-amber-300 text-amber-100 p-4 rounded-full ">
            <GitPullRequestDraft />
          </div>
          <div>
            <h1 className="text-sm uppercase ">Requested Book</h1>
            <p className="font-medium text-xl">0</p>
          </div>
        </div>

        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-blue-400 text-blue-100 p-4 rounded-full ">
            <ArrowRightLeft />
          </div>
          <div>
            <h1 className="text-sm uppercase ">Check Out Book</h1>
            <p className="font-medium text-xl">0</p>
          </div>
        </div>

        <div className="bg-green-0 h-20 flex p-2 items-center gap-5 border-1 border-gray-200  rounded-md ">
          <div className="bg-red-400 text-red-100 p-4 rounded-full ">
            <BookmarkX />
          </div>
          <div>
            <h1 className="text-sm uppercase ">Missing Book</h1>
            <p className="font-medium text-xl">0</p>
          </div>
        </div>
      </div>
      <h1 className="mt-5 mb-5 text-xl">View </h1>
      <BookTable />
    </div>
  );
};

export default BookPage;
