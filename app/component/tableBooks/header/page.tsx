import { AlertDialog } from "@radix-ui/themes";
import { FolderOutput, Plus, Search } from "lucide-react";
import React from "react";

const HeaderBookTable = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        {/* search form */}
        <div className="w-full md:w-1/2">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-600   " />
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300      text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 "
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        {/* button group */}
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <button
            type="button"
            className="flex gap-1 bg-indigo-600 font-medium rounded-md text-white items-center justify-center py-2 px-2 text-sm"
          >
            <FolderOutput size={18} />
            Export
          </button>
          <AlertDialog.Root>
            {/* Trigger button */}
            <AlertDialog.Trigger>
              <button
                type="button"
                className="flex gap-1 bg-indigo-600 font-medium rounded-md text-white items-center justify-center py-2 px-2 text-sm"
              >
                <Plus />
                New Book
              </button>
            </AlertDialog.Trigger>

            {/* AlertDialog content */}

            <AlertDialog.Content className=" bg-white px-20 rounded-md shadow-lg w-96">
              {/* Adding title for accessibility */}
              <AlertDialog.Title className="text-2xl font-normal text-gray-800 mb-4">
                Add New Book
              </AlertDialog.Title>
              <div className="bg-amber-0 p-6 flex flex-col ">
                <label
                  className="font-normal text-sm  m-2 text-gray-600 "
                  htmlFor=""
                >
                  Book Title
                </label>
                <input
                  className="bg-gray-100  border-2 border-gray-200 p-2 outline-0 rounded-md focus:border-2 focus:border-indigo-500 "
                  type="text"
                  placeholder="Book Title"
                />

                {/* 2 */}
                <label
                  className="font-normal text-sm  m-2 text-gray-600 "
                  htmlFor=""
                >
                  Author
                </label>
                <input
                  className="bg-gray-100 border-2 border-gray-200 p-2 outline-0 rounded-md focus:border-2 focus:border-indigo-500 "
                  type="text"
                  placeholder="Author"
                />

                {/* 3*/}

                <label
                  className="font-normal text-sm  m-2 text-gray-600 "
                  htmlFor=""
                >
                  Publisher
                </label>
                <input
                  className="bg-gray-100 border-2 border-gray-200 p-2 outline-0 rounded-md focus:border-2 focus:border-indigo-500 "
                  type="text"
                  placeholder="Publisher"
                />

                {/* 4 */}

                <label
                  className="font-normal text-sm  m-2 text-gray-600 "
                  htmlFor=""
                >
                  Copies
                </label>
                <input
                  className="bg-gray-100 border-2 border-gray-200 p-2 outline-0 rounded-md focus:border-2 focus:border-indigo-500 "
                  type="number"
                  placeholder="Copies"
                />
                {/* 5 */}

                <label
                  className="font-normal text-sm  m-2 text-gray-600 "
                  htmlFor=""
                >
                  Language
                </label>
                <input
                  className="bg-gray-100 border-2 border-gray-200 p-2 outline-0 rounded-md focus:border-2 focus:border-indigo-500 "
                  type="text"
                  placeholder="Language"
                />
                {/* 6 */}
                <label
                  className="font-normal text-sm  m-2 text-gray-600 "
                  htmlFor=""
                >
                  Select Library
                </label>

                <select className="bg-gray-100 border-2 border-gray-200 p-2 outline-0 rounded-md focus:border-2 focus:border-indigo-500 ">
                  <option value="">Select Library</option>
                  <option value="">Select Library</option>
                  <option value="public">Public Library</option>
                  <option value="university">University Library</option>
                  <option value="digital">Digital Library</option>
                  <option value="specialized">Specialized Library</option>
                  <option value="community">Community Library</option>
                </select>
              </div>

              {/* Action buttons */}
              <div className="mt-4 flex justify-end gap-4">
                <AlertDialog.Cancel>
                  <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
                    Cancel
                  </button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
                    Confirm
                  </button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Root>
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <select
              className=" border-2 px-2 py-2 rounded-md outline-0 text-gray-500 focus:border-indigo-500 border-gray-200"
              name=""
              id=""
            >
              <option value="All"> Available</option>
              <option value="All">Losted</option>
              <option value="All">Archive</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBookTable;
