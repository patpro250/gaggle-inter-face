import { Spinner } from "@radix-ui/themes";
import React from "react";

const Loading = () => {
  return (
    <div className="bg-gray-200  absolute z-30 h-[80%] w-[80%] flex justify-center gap-10 items-center text-indigo-600 text-2xl ">
      <Spinner />
      <p className=" text-sm ">waiting ....</p>
    </div>
  );
};

export default Loading;
