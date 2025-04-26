"use client";

import React from "react";
import { Orbitron, Poppins } from "next/font/google";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Stepper1 from "../stepper/page";
import { Landmark } from "lucide-react";
import { Building2 } from "lucide-react";

// Google Fonts initialization
const orbitron = Orbitron({
  subsets: ["latin"], // Specify the character set
  weight: ["400"], // Choose the font weight (400 is regular)
});

const poppins = Poppins({
  weight: ["400", "600", "700"], // You can choose the weights you need
  subsets: ["latin"], // Optional: limits the font to Latin characters (for performance)
});

const P1 = () => {
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
      <main className="flex">
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
            <img className="w-full" src="p1.png" />
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

        {/* Right Section */}
        <div className="flex-1/2  h-screen flex flex-col  items-center relative isolate overflow-hidden bg-white px-6 py-0 sm:py-32 lg:px-8  ">
          <section className="">
            <div className="absolute w-full inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
            <div className="absolute  inset-y-0 right-1/3 -z-10 mr-16 w-[400%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

            <div>
              <Stepper1 />
              <div className="text-center flex flex-col space-y-6 items-center ">
                <div className="bg-sky-0 w-20 mt-5 mb-10 shadow rounded-full text-center ">
                  <img className="m-auto" src="image.svg" alt="" />
                </div>

                {/* <h1>
                  <span
                    className={`${orbitron.className} text-indigo-700 text-3xl  text-center`}
                  >
                    Niti Book
                  </span>
                </h1> */}
              </div>

              <div>
                <form className="text-center " action="">
                  <label
                    className=" text-base text-gray-600  "
                    htmlFor="institution"
                  >
                    Verify institution Name
                  </label>
                  <div className=" relative bg-gray-50  mt-3 rounded-md  ">
                    <Building2
                      className="bg-gray-0 absolute top-2  left-2"
                      size={12}
                      strokeWidth={1.25}
                      width={30}
                      height={30}
                    />
                    {/* <Landmark
                      className="bg-gray-200 "
                      size={32}
                      strokeWidth={1.25}
                      width={40}
                      height={40}
                    /> */}
                    <input
                      id="institution"
                      className={`font-normal  focus:border-indigo-400 focus:bg-indigo-100 rounded-md focus:ring-indigo-200 outline-0 p-2 border-2 border-indigo-100  ps-12`}
                      type="text"
                      placeholder="Verify Institution Name"
                    />
                  </div>

                  <button className=" bg-sky-600 mt-6 w-[100%] h-10 rounded-md text-md font-medium text-white ">
                    {" "}
                    Verify{" "}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default P1;
