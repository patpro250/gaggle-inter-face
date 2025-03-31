import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageHeader from "../ui/page-header/page";
const LandingPage = () => {
  return (
    <>
      <PageHeader />
      <div className="bg-gray-50 flex flex-col gap-5 pt-10 items-center h-screen ">
        <div>
          <Image width={80} height={80} src="/image.svg" alt={""} />
        </div>
        <h1 className="text-2xl">
          Welcome to <span className=" text-indigo-600 ">Niti Book</span>
        </h1>
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-narmal text-gray-700 "
            >
              email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-0 "
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-narmal text-gray-700 "
            >
              Who you are
            </label>

            <select
              name=""
              className="bg-gray-50 outline-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              id=""
            >
              <option value="">Select Who You Are</option>
              <option value="i">institution</option>
              <option value="l">Librarian</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white p-2 w-full rounded-md  hover:bg-indigo-500 transition-all"
          >
            Continue
          </button>
        </form>

        <div>
          <ul className=" text-gray-500 text-[9px] flex gap-3  ">
            <li className="hover:underline">
              <Link href="/">privicy</Link>
            </li>
            <li className="hover:underline">
              <Link href="/">Terms</Link>
            </li>

            <li className="hover:underline">
              <Link href="/">about</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
