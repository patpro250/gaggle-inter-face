import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className=" flex flex-col h-screen w-screen justify-center bg-amber-0 items-center  ">
      <Image src={"/notfound.svg"} width={300} height={300} alt={""} />
      <h1 className="text-2xl m-2 ">
        <span className=" text-indigo-700 font-medium m-6 ">Whoops!</span> Page
        not found.
      </h1>
      <p className=" text-md text-gray-700 ">
        The page you’re looking for doesn’t exist. But don’t worry, you can:
      </p>
      <div className=" text-gray-600 ">
        Return to the
        <Link href="/admin">
          <span className="text-md text-indigo-700"> Home Page </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
