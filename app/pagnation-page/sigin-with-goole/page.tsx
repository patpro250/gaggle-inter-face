import { Check } from "lucide-react";
import React from "react";
import PageHeader from "../../ui/page-header/page";

const SignInWithGoole = () => {
  return (
    <div className=" overflow-x-hidden ">
      <PageHeader />
      <div className="bg-gray-50 flex justify-center items-center h-screen w-screen ">
        <div className="  flex flex-clo md:flex-row bg-white rounded-md min-h-[60%] shadow-2xl overflow-hidden w-[80%] ">
          <div className="flex-1  hidden md:flex justify-center items-center relative overflow-hidden bg-indigo-50 ">
            <div className="absolute   bg-sky-200 h-72 w-72  rounded-full -left-40 -bottom-40 border-b-8 animate-spin border-b-sky-600 border-t-sky-400 border-t-8  "></div>
            <div className="absolute   bg-sky-600 h-72 w-72 animate-pulse  rounded-full -right-50 -top-50 rotate-90 border-b-8 border-b-sky-600 border-t-sky-400 border-t-8  "></div>
            <div className=" flex items-center gsp-5  absolute z-10 h-full w-full bg-amber-0 px-10 bg-opacity-0 ">
              <div>
                <h1 className=" text-3xl font-medium  mb-2 ">
                  Welcome To{" "}
                  <span className=" text-indigo-600 ">GaggleNiti</span> Group
                  Where You find{" "}
                </h1>
                <ul className=" text-md   text-gray-700 ">
                  <li className=" flex mt-4 mb-4 gap-3 items-center  ">
                    <div className=" bg-gray-100 shadow-3xl p-1 rounded-full ">
                      <Check size={20} color="green" strokeWidth={4} />{" "}
                    </div>
                    Where Libraries Meet Innovation.
                  </li>

                  <li className=" flex mt-4 mb-4 gap-3 items-center  ">
                    <div className=" bg-gray-100 p-1 rounded-full ">
                      <Check size={20} color="green" strokeWidth={4} />{" "}
                    </div>
                    Sign in to connect with knowledge and services.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center ">
            <div className="flex flex-col gap-5  px-6 ">
              <h1 className="text-2xl  text-center ">
                <span className=" text-indigo-600 ">Create</span> Your Account
                <span className=" text-indigo-600 "> Today!</span>
              </h1>
              <p className=" text-center leading-6 text-gray-700 text-sm  ">
                {" "}
                Sign up now to unlock exclusive features, personalized
                recommendations, and more. It’s quick and easy—join us and get
                started!
              </p>

              <button className=" bg-sky-100 w-60 flex justify-center m-auto items-center gap-4 py-3 rounded-md shadow-md ">
                {" "}
                <img className="h-6" src="/goole.png" alt="" /> Sign In With
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInWithGoole;
