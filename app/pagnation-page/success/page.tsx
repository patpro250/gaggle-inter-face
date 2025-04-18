"use client";
import { Button } from "@radix-ui/themes";
import { Merienda, Orbitron } from "next/font/google";
import Image from "next/image";
import React, { useEffect } from "react";
import { useInstitutionContext } from "../../admin/stateManagement/institution";
import { useRouter } from "next/navigation";
import axios from "axios";

type InstitutionData = {
  email: string;
  name: string;
  address: string;
  phone: string;
  openingHours?: string;
  type: string;
  password: string;
};
const merienda = Merienda({
  subsets: ["latin"], // Specify the character set
  weight: ["400"], // Choose the font weight (400 is regular)
});
const Success = () => {
  const { DataForm, setData } = useInstitutionContext();
  const router = useRouter();

  const createInstitution = async (data: InstitutionData) => {
    try {
      const res = await axios.post("http://localhost:4000/institutions", data);
      const token = res.headers["x-auth-token"];

      if (!token) {
        router.push("/pagnation-page/"); // Guhita ujya ku pagination page niba token itabonetse
        return;
      }

      // Bika token muri localStorage
      localStorage.setItem("x-auth-token", token);

      // Redirect ujya ku admin page
      router.push("/admin");
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        console.log("Axios error:Patrick");
        return;
        // Optional: You can handle based on status code
        const status = err.response?.status;

        // Redirect to Google Sign-in (change URL as needed)
        router.push("/pagnation-page/");
      } else {
        console.log("Unexpected error:", err.message);
      }
    }
  };

  useEffect(() => {
    if (!DataForm.name || !DataForm.email) {
      router.push("/pagnation-page/");
    }
  }, [DataForm, router]);

  const handerSubmitToApi = () => {
    const { reTryPassword, ...cleanedData } = DataForm;
    console.log(cleanedData);
    createInstitution(cleanedData);
  };

  return (
    <div>
      {/* <img src="/bg-s.png" alt={"user"} /> */}

      <div className={`${merienda.className} bg-[url(/bg-s.png)] h-screen  `}>
        <div className="bg-amber-0 max-w-7xl h-screen p-6 flex flex-col  justify-center ">
          <h1 className="flex leading-14 mb-8 items-center text-5xl font-extrabold ">
            Welcome to{" "}
            <span className="font-normal text-indigo-500">
              {" "}
              {DataForm.name}
            </span>
            !
            <span className="bg-blue-100 text-blue-800  text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-2">
              30+
            </span>
          </h1>

          <h3 className=" text-xl mb-4 font-medium ">
            Hello [Iraguha Patrick].
          </h3>
          <p className=" font-normal text-sm leading-5 ">
            Congratulations on successfully creating your account! 🎉 You are
            now a part of our community.
          </p>

          <h3 className="font-medium mt-3 mb-3 ">
            Here's what you can do next:
          </h3>
          <ul>
            <li className="flex items-center text-sm mt-2 mb-2 ">
              <svg
                className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Explore our vast collection of books and resources 📚
            </li>
            <li className="flex items-center  text-sm mt-2 mb-2">
              <svg
                className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Reserve books or request new arrivals 📖
            </li>
            <li className="flex items-center  text-sm mt-2 mb-2 ">
              <svg
                className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Access exclusive member-only content 🎧
            </li>
            <li className="flex items-center  text-sm mt-2 mb-2 ">
              <svg
                className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Stay updated with upcoming events and promotions 🎉
            </li>
          </ul>

          <div>
            <button
              onClick={handerSubmitToApi}
              className=" px-5 p-3 mt-2 bg-indigo-300 text-blue-800 rounded-md hover:opacity-90 "
            >
              Get Free Trial +30
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
