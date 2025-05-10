"use client";
import { Building2, Check, EqualApproximatelyIcon, Mail } from "lucide-react";
import React, { FormEvent, useRef, useState } from "react";
import PageHeader from "../../ui/page-header/page";
import { signIn } from "next-auth/react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { z } from "zod";

import { useRouter } from "next/navigation";

// Example list of disposable email domains (expand this list as needed)
const disposableDomains = [
  "mailinator.com",
  "10minutemail.com",
  "tempmail.com",
  "guerrillamail.com",
];

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email("Invalid email format")
  .refine(
    (email) => {
      const domain = email.split("@")[1];
      return !disposableDomains.includes(domain);
    },
    {
      message: "Disposable email addresses are not allowed",
    }
  );

const SignInWithGoole = () => {
  const router = useRouter();
  const { DataForm, setData } = useInstitutionContext();
  const [err, setErr] = useState("");
  const email = useRef<HTMLInputElement>(null);
  const submitHander = (e: FormEvent) => {
    e.preventDefault();
    const valueemail = email.current.value;
    const result = emailSchema.safeParse(valueemail);

    if (!result.success) {
      const errorMessages = result.error.errors.map((err) => err.message);
      setErr(errorMessages[0]);
      console.log(err);
    }

    setData({ ...DataForm, email: result.data });
    router.push("/pagnation-page/p1");
    console.log(DataForm);
  };

  const removeErro = () => {
    setErr("");
  };

  const slider = () => {
    router.push("pagnation-page/p1");
  };
  return (
    <div className=" overflow-x-hidden ">
      <PageHeader />
      <div className="bg-gray-50 flex justify-center items-center h-screen w-screen ">
        <div className="  flex flex-clo md:flex-row bg-white rounded-md min-h-[70%] shadow-2xl overflow-hidden w-[80%] ">
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

              <Link href="/api/auth/signin">
                <button className="  border-1 border-gray-200  w-[100%] py-2 mt-3 flex justify-center m-auto items-center gap-4  rounded-md hover:shadow ">
                  {" "}
                  <img className="h-6" src="/goole.png" alt="" /> Sign In With
                  Google
                </button>
              </Link>

              <div className="flex mt-1 mb-1 items-center w-full gap-4">
                <div className="flex-grow h-px bg-gray-300" />
                <h1 className="text-gray-500 text-sm">Or</h1>
                <div className="flex-grow h-px bg-gray-300" />
              </div>

              <form
                onSubmit={submitHander}
                className="bg-green-0 px-6 py-3"
                action=""
              >
                {err && (
                  <div
                    className="p-4 mb-4 text-sm text-red-400 rounded-lg bg-red-100  "
                    role="alert"
                  >
                    <span className="font-normal">{err}</span>
                  </div>
                )}
                <div className=" relative bg-gray-50 flex justify-center items-center  mt-3 rounded-md  ">
                  <Mail
                    className="bg-gray-0 absolute top-2  left-2"
                    size={10}
                    strokeWidth={1.25}
                    width={20}
                    height={20}
                  />

                  <input
                    className={`
                      font-normal bg-gray-100 border-1 border-gray-200 w-full focus:border-indigo-400 focus:bg-indigo-100 rounded-md focus:ring-indigo-200 outline-0 p-2   ps-12`}
                    type="text"
                    onChange={removeErro}
                    // onChange={handerOnChange}
                    id="institution"
                    name="name"
                    // value={DataForm.name}
                    ref={email}
                    placeholder="Email Address"
                  />
                </div>

                <button
                  type="submit"
                  className="  border-1 border-gray-200  w-[100%] py-2 mt-3 flex justify-center m-auto items-center gap-4  rounded-md hover:shadow "
                >
                  {" "}
                  Sign-Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInWithGoole;
