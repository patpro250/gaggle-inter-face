import Image from "next/image";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const WlcomeBurner = () => {
  const [text] = useTypewriter({
    words: [
      "Catalog books with ease",
      "Add and manage books in seconds",
      "Assign books to students and track returns",
      "Organize collections by class or subject",
      "Invite and manage librarians",
      "Access library reports and usage history",
    ],
    loop: Infinity, // Makes the typewriter effect loop indefinitely
  });
  return (
    <div>
      <div className=" relative min-h-60 mb-20 bg-gradient-to-br from-[#c1d8e0]   overflow-hidden border-1 border-gray-200 rounded-md">
        <div className=" absolute z-10 bg-amber-0 h-full w-full xl:w-[50%] flex flex-col gap-5 justify-center ps-10 ">
          <h1 className="text-4xl font-medium text-gray-700 mb-2 ">
            Welcome to <span className="text-primary"> Niti Book</span> Library
          </h1>

          <p className="text-[12px] text-gray-600 max-w-2xl mb-8">
            NITI BOOK help schools and institutions to manage their libraries
            smarter. You’re just one step away from activating your full access.
          </p>

          <h1 className="text-xl font-medium text-gray-700 min-w-[200px] mb-2 ">
            You Can :{" "}
            <span className="text-md font-md text-primary mb-2 ">{text}</span>
          </h1>
        </div>

        <Image
          className="mt-6 absolute right-0 "
          src="/s-b.png"
          width={300}
          height={200}
          alt={""}
        />
      </div>
    </div>
  );
};

export default WlcomeBurner;
