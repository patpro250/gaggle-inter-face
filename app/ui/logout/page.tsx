"use client";
import { Button } from "@radix-ui/themes";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
interface Props {
  IsLogout: () => void;
}
const LogoutBoxModal = ({ IsLogout }: Props) => {
  return (
    <div className="bg-[#0000006c] absolute z-20 h-screen w-screen flex justify-center items-center">
      <div className=" bg-white overflow-hidden rounded-md shadow-2xl h-50 w-xl">
        <div className="bg-amber-0 border-b-1 border-gray-200 h-[70%] flex flex-col justify-center items-center">
          <p className="text-xl   text-gray-800 font-medium ">
            Are you sure you want to log out?
          </p>
        </div>
        <div className="bg-amber-0 h-[30%] flex items-center px-5 justify-end">
          <div className="bg-green-0 w-[100%] text-right flex gap-4 justify-end ">
            <button
              onClick={IsLogout}
              className="bg-red-500 hover:opacity-90 text-sm text-white px-5 border-1 border-gray-200 rounded-sm py-1 "
            >
              Cancel
            </button>
            <button
              onClick={() => signOut()}
              className="bg-red-0 hover:bg-gray-300 transition-all ease-in-out text-sm text-gray-800 px-5 border-1 border-gray-200 rounded-sm py-1 "
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutBoxModal;
