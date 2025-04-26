import Link from "next/link";
import React from "react";

const PageHeader = () => {
  return (
    <div className=" overflow-hidden ">
      <nav className="w-screen bg-gray-50 shadow-2xl  py-5  flex items-center justify-center ">
        <ul className="flex gap-10 ">
          <li className=" text-md font-normal text-gray-600 underline  underline-offset-4   ">
            <Link href="/">About</Link>
          </li>
          <li className=" text-md font-normal text-gray-500 hover:underline  hover:underline-offset-8 ">
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageHeader;
