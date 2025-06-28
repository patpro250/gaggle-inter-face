import React from "react";
import Verified from "../verfied/page";

const Track3 = () => {
  return (
    <div className="bg-transparentfont-medium py-7 px-52 ">
      <ol className="flex items-center w-full text-3xl font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:bg-blue-600 after:rounded-2xl after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:border-sky-700">
          <span className="flex text-xl  items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <Verified />
            Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:bg-blue-600 after:rounded-2xl after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:border-sky-700">
          <span className="flex items-center text-xl after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            {/* <span className="me-2">2</span> */}
            <Verified />
            Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        <li className="flex text-xl items-center  text-blue-600 dark:text-blue-500">
          <Verified />
          Confirmation
        </li>
      </ol>
    </div>
  );
};

export default Track3;
