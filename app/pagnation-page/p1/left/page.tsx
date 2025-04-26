import { Orbitron } from "next/font/google";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const orbitron = Orbitron({
  subsets: ["latin"], // Specify the character set
  weight: ["400"], // Choose the font weight (400 is regular)
});
const LeftP1 = () => {
  const [text] = useTypewriter({
    words: [
      "Cataloging and Classification",
      "Check-in/Check-out System",
      "Search and Discovery",
      "User Management",
      "Reservation System",
      "Inventory Management",
      "Inter-Library Loan System ",
    ],
    loop: Infinity, // Makes the typewriter effect loop indefinitely
  });
  return (
    <div>
      {/* Left Section with Gradient Background */}
      <div className=" relative flex-1/3 h-screen overflow-hidden  text-center bg-gradient-to-t from-[#00d5ff23] to-[#0e7b9c80] bg-opacity-20">
        <div className="bg-sky-0 text-center px-10 py-6">
          <h1
            className={`${orbitron.className} text-center !font-medium text-3xl mb-4 leading-11 max-w-[100%]`}
          >
            Welcome to{" "}
            <span className="text-indigo-700  text-center "> Niti Book</span>{" "}
            You find <br /> <span className="text-indigo-700">{text}</span>
            <Cursor cursorColor="#4338ca" />
          </h1>
          <p className={` text-[14px]  leading-6`}>
            Step into the world of Niti Book Library, where knowledge meets
            convenience.
          </p>
        </div>

        <div className="-z-10 w-full h-80 text-center absolute ">
          <img className="w-full" src="/p1.png" />
        </div>

        <div className="absolute bottom-5  h-5 w-full py-1 ">
          <ul className=" list-none flex justify-center  space-x-5  text-center ">
            <li
              className={` capitalize text-[9px] hover:underline font-medium decoration-1 `}
            >
              <a href="">Privicy</a>
            </li>
            <li
              className={` capitalize hover:underline  text-[9px] font-medium `}
            >
              <a href="">terms & condition</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftP1;
