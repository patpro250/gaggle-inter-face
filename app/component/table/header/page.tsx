import { Plus } from "lucide-react";
import React from "react";

const HeaderTable = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 ">
        {/* search form */}
        {/* <div className="w-full md:w-1/2">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-600   "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
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
        </div> */}
        {/* button group */}
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <select
              className=" border-1 px-1 py-1 text-md  font-light rounded-md outline-0 text-gray-700 focus:border-indigo-500 border-gray-200"
              name=""
              id=""
            >
              <option value="All" selected>
                {" "}
                All
              </option>
              <option value="All">Active </option>
              <option value="All">Inctive</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTable;
