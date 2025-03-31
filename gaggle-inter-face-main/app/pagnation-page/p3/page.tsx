"use client";

import { LockKeyhole } from "lucide-react";
import { Orbitron } from "next/font/google";
import Stepper1 from "../stepper/page";

// Google Fonts initialization
const orbitron = Orbitron({
  subsets: ["latin"], // Specify the character set
  weight: ["400"], // Choose the font weight (400 is regular)
});

const P2 = () => {
  return (
    <div>
      {/* <P1 /> */}

      <div className="flex  bg-indigo-50 h-screen py-10 ">
        <div className="flex-1/2  flex flex-col items-center bg-amber-0 ">
          <div className="flex  flex-col justify-center items-center bg-amber-0 p-2  ">
            <Stepper1 />

            {/* <h1
              className={`${orbitron.className} mt-6 text-center !font-medium text-3xl mb-4 leading-11 max-w-[100%]`}
            >
              Continue To{" "}
              <span className="text-indigo-700  text-center "> Niti Book </span>{" "}
              <span className="text-indigo-700"> Create </span> Account
              <Cursor cursorColor="#4338ca" />
            </h1> */}
          </div>

          <form className=" bg-indigo-0 p-5  w-[30%] " action="">
            <label
              className="  text-base text-gray-600  "
              htmlFor="institution"
            >
              Password
            </label>
            <div className=" relative bg-gray-50  mt-2 mb-3 rounded-md  ">
              <LockKeyhole
                className="bg-gray-0 absolute top-2  left-2"
                size={12}
                strokeWidth={1.25}
                width={30}
                height={25}
              />

              <input
                id="institution"
                className={`font-normal w-full  focus:border-indigo-400 focus:bg-indigo-100 rounded-md focus:ring-indigo-200 outline-0 p-2 border-2 border-indigo-100  ps-12`}
                type="password"
                placeholder="Password"
              />
            </div>

            <label className=" text-base text-gray-600  " htmlFor="institution">
              Re-try Password
            </label>
            <div className=" relative bg-gray-50  mt-2 mb-3 rounded-md  ">
              <LockKeyhole
                className="bg-gray-0 absolute top-2  left-2"
                size={12}
                strokeWidth={1.25}
                width={30}
                height={25}
              />

              <input
                id="institution"
                className={`font-normal w-full  focus:border-indigo-400 focus:bg-indigo-100 rounded-md focus:ring-indigo-200 outline-0 p-2 border-2 border-indigo-100  ps-12`}
                type="tel"
                placeholder="Re-try Password"
              />
            </div>

            <button className=" bg-sky-600 mt-6 w-[100%] h-10 rounded-md text-md font-medium text-white ">
              Continue
            </button>
          </form>
        </div>

        {/* right part */}
        {/* <div className="flex-1/3 bg-indigo-400  h-screen relative overflow-hidden">
          <div className="bg-amber-0 w-full h-full ">
            <img className=" h-80 w-full " src="g.png" alt="" />

            <div className="bg-amber-0 px-3 py-3">
              <button className=" flex space-x-6  items-center hover:bg-indigo-600 duration-100 transition-all ease-in-out text-white h-10  px-4 rounded-full ">
                {" "}
                <span className="h-6 mr-1">
                  <CircleArrowLeft color="white" />
                </span>
                Back
              </button>

              <ul className=" flex gap-4 mt-3 ">
                <li className="h-3 w-3 bg-indigo-300 rounded-full shadow-2xl duration-100 transition-all ease-in-out "></li>
                <li className="h-3 w-3 bg-indigo-600 rounded-full "></li>
                <li className="h-3 w-3 bg-indigo-300 rounded-full "></li>
                <li className="h-3 w-3 bg-indigo-300 rounded-full "></li>
              </ul>
            </div>
          </div>
          <div className="custom-shape-divider-bottom-1743166455">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default P2;
