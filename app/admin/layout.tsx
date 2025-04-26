"use client";
import React, { ReactNode, Suspense, useEffect, useState } from "react";
import NavBarAdminComponent from "../ui/adminNavBar/page";
import AsiderPageAdmin from "../ui/adminAsider/page";
import useAuthGuard from "../middlwere/AdminGuid/page";

interface Props {
  children: ReactNode;
}

const AdiminLayout = ({ children }: Props) => {
  useAuthGuard();
  let name123 = "";
  const [isClient, setIsClient] = useState(false); // Added to check if we're on the client side

  useEffect(() => {
    setIsClient(true); // This will be true after the component mounts
  }, []);

  const token = isClient ? localStorage.getItem("x-auth-token") : null; // Safe access to localStorage

  if (token) {
    const payload65 = token.split(".")[1];
    const Decode65 = atob(payload65);
    const payload = JSON.parse(Decode65);
    name123 = payload.name;
  }

  const [dateTime, setDateTime] = useState<string>("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDateTime = new Date();

      const formattedDate = currentDateTime.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });

      setDateTime(`${formattedDate}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" h-[100vh] overflow-hidden ">
      <NavBarAdminComponent nameInsititution={name123} />
      <div className="bg-indigo-400 p-1 flex justify-center align-middle items-center text-white text-base font-medium">
        <span className=" uppercase ">
          WELCOME TO{" "}
          <span className="bg-indigo-500 ms-5 text-sm font-semibold px-2 rounded-sm">
            {name123}
          </span>{" "}
        </span>
        <span className="bg-indigo-500 ms-5 text-sm font-semibold px-2 rounded-sm">
          {dateTime || "Loading.."}
        </span>
      </div>
      <main className="overflow-hidden h-[100vh] flex">
        <div>
          <AsiderPageAdmin />
        </div>
        <div className="w-[90%] bg-gray-0 p-4 overflow-y-auto h-[100vh]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdiminLayout;
