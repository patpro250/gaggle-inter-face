"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import { Button, Switch } from "@radix-ui/themes";
import { Badge, Cog, EyeIcon, Trash2, Wrench } from "lucide-react";
import { on } from "events";
import Loading from "../loading";
import useAuthGuard from "../../middlwere/AdminGuid/page";
import Link from "next/link";

const activityLogs = [
  {
    id: 1,
    status: "Unread",
    heading: "New Task Assigned",
    message: "Manager John assigned 'Book Inventory Check' to you.",
  },
  {
    id: 2,
    status: "Unread",
    heading: "Task Completed",
    message: "Sarah marked 'Library Maintenance' as completed.",
  },
  {
    id: 3,
    status: "Read",
    heading: "New Member Added",
    message: "Manager Alex approved 3 new library members.",
  },
  {
    id: 4,
    status: "Unread",
    heading: "Policy Updated",
    message: "Mike updated the 'Late Return Policy'.",
  },
  {
    id: 5,
    status: "Read",
    heading: "System Alert",
    message: "Scheduled system maintenance at 10 PM tonight.",
  },
  {
    id: 6,
    status: "Unread",
    heading: "Task Review Required",
    message: "Director requested feedback on 'Digital Archive Setup'.",
  },
  {
    id: 7,
    status: "Read",
    heading: "Book Request Approved",
    message: "Your request for 'JavaScript Deep Dive' has been approved.",
  },
  {
    id: 8,
    status: "Unread",
    heading: "Overdue Books Alert",
    message: "3 books are overdue for return. Please check your list.",
  },
  {
    id: 9,
    status: "Read",
    heading: "New Announcement",
    message: "Library will be closed this Friday for maintenance.",
  },
  {
    id: 10,
    status: "Unread",
    heading: "Profile Update Needed",
    message: "Your profile information needs to be updated.",
  },
];
const MyAccount = () => {
  useAuthGuard();

  let name123 = "";
  let email123 = "";
  let number123 = "";
  let id123 = "";
  let address = "";
  const token = localStorage.getItem("x-auth-token");
  if (token) {
    const payload65 = token.split(".")[1];
    const Decode65 = atob(payload65);
    const payload = JSON.parse(Decode65);
    console.log(payload);
    id123 = payload.id;
    email123 = payload.email;
    name123 = payload.name;
    number123 = payload.phone;
    address = payload.address;
    // console.log(payload.name);
  }
  const firstLetter = name123.trim().charAt(0).toUpperCase();
  const BackgroundUser = (letter: string) => {
    const letterColors = {
      A: "#FF0000", // Red
      B: "#0000FF", // Blue
      C: "#00FF00", // Green
      D: "#FFFF00", // Yellow
      E: "#FFA500", // Orange
      F: "#800080", // Purple
      G: "#008000", // Dark Green
      H: "#FFC0CB", // Pink
      I: "#A52A2A", // Brown
      J: "#D3D3D3", // Light Gray
      K: "#000000", // Black
      L: "#FFFFFF", // White
      M: "#FFD700", // Gold
      N: "#C0C0C0", // Silver
      O: "#808080", // Gray
      P: "#800000", // Maroon
      Q: "#FF6347", // Tomato
      R: "#FF4500", // OrangeRed
      S: "#32CD32", // LimeGreen
      T: "#40E0D0", // Turquoise
      U: "#EE82EE", // Violet
      V: "#F0E68C", // Khaki
      W: "#FF1493", // DeepPink
      X: "#8B0000", // DarkRed
      Y: "#9ACD32", // YellowGreen
      Z: "#4B0082", // IndigC",
    };
    const letter__bg = letterColors[letter];
    return letter__bg;
  };

  const bg_color = BackgroundUser(firstLetter);
  return (
    <div className="  bg-amber-0 pb-20 ">
      <div className="min-h-50 bg-indigo-0 border-b-1 border-gray-200 p-10 flex justify-center items-center  ">
        <div className=" flex flex-col gap-5">
          <div className="flex gap-10 flex-col md:flex-row justify-items-center md:justify-center items-center">
            <div
              style={{ backgroundColor: bg_color }}
              className="bg-green-0 h-20 w-20 text-5xl text-white shadow-0 flex items-center justify-center rounded-full overflow-hidden"
            >
              {firstLetter}
            </div>
            <div className=" text-center md:text-left ">
              <h1 className="text-3xl font-medium text-gray-700">
                {name123 ? name123 : "Loading name..."}
              </h1>
              <h1 className="text-md font-normal text-gray-600 mt-1">
                {email123 ? email123 : "Loading email..."}
              </h1>
              <h1 className="text-md font-normal text-gray-600 mt-1">
                {number123 ? number123 : "Loading number..."}
              </h1>
              <p className="text-md font-normal text-gray-600 mt-1 ">
                {address ? address : "Loading address..."}
              </p>
            </div>
          </div>

          <div>
            <Link href={`/admin/Account/${id123}`}>
              <button className="border-1 border-gray-200 px-3 py-2 ms-[60px] md:ms-35 rounded-md text-sm text-gray-700">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* body */}

      <div className="p-2 m-4 grid grid-cols-1 md:grid-cols-6 gap-2   min-h-60 bg-gray-0">
        <div className="grid col-span-auto md:col-span-4 bg-amber-0 border-1 border-gray-200 p-3 ">
          <h1 className="text-base pb-2 border-b-1 border-gray-200 text-gray-700 font-medium flex items-center gap-2">
            <Wrench size={20} />
            Activity log
            <Switch value={1} />
          </h1>
          <div className="bg-red-0 h-62 pb-2 px-2 pt-2 overflow-y-auto  ">
            {/* box data */}

            {activityLogs.map((data) => (
              <div className="bg-amber-0 rounded-md mt-2 mb-2 p-2 border-1 border-gray-200 bg-amber-0 ">
                <div className="flex justify-end">
                  <Badge color={data.status == "Unread" ? "red" : "green"}>
                    {data.status}
                  </Badge>
                </div>
                <h1 className="text-md font-medium text-gray-700 mb-1 ">
                  {data.heading}
                </h1>
                <p className="text-sm text-gray-600 tracking-wide font-light ">
                  {data.message}
                </p>
                <div className="bg-amber-0 flex justify-end gap-2 text-gray-600">
                  <EyeIcon size={14} />
                  <div className="text-red-500">
                    <Trash2 size={14} />
                  </div>
                </div>
              </div>
            ))}

            {/* end box data */}
          </div>
        </div>
        <div className="bg-green-0 border-1 border-gray-200  col-span-auto md:col-span-2  ">
          <div className="p-4">
            <h1 className="text-base pb-2 border-b-1 border-gray-200 text-gray-700 font-medium flex items-center gap-2">
              <Cog size={20} />
              History
            </h1>
            <div className="bg-green-0 h-60 p-2 overflow-y-auto">
              <div className="bg-amber-0 rounded-md mt-2 mb-2 p-2 border-1 border-gray-200 bg-amber-0 ">
                <h1 className="text-md font-medium text-gray-700 mb-1 ">
                  heding
                </h1>
                <p className="text-sm text-gray-600 tracking-wide font-light ">
                  message
                </p>
                <div className="bg-amber-0 flex justify-end gap-2 text-gray-600">
                  <EyeIcon size={14} />
                  <div className="text-red-500">
                    <Trash2 size={14} />
                  </div>
                </div>
              </div>

              <div className="bg-amber-0 rounded-md mt-2 mb-2 p-2 border-1 border-gray-200 bg-amber-0 ">
                <h1 className="text-md font-medium text-gray-700 mb-1 ">
                  heding
                </h1>
                <p className="text-sm text-gray-600 tracking-wide font-light ">
                  message
                </p>
                <div className="bg-amber-0 flex justify-end gap-2 text-gray-600">
                  <EyeIcon size={14} />
                  <div className="text-red-500">
                    <Trash2 size={14} />
                  </div>
                </div>
              </div>

              <div className="bg-amber-0 rounded-md mt-2 mb-2 p-2 border-1 border-gray-200 bg-amber-0 ">
                <h1 className="text-md font-medium text-gray-700 mb-1 ">
                  heding
                </h1>
                <p className="text-sm text-gray-600 tracking-wide font-light ">
                  message
                </p>
                <div className="bg-amber-0 flex justify-end gap-2 text-gray-600">
                  <EyeIcon size={14} />
                  <div className="text-red-500">
                    <Trash2 size={14} />
                  </div>
                </div>
              </div>

              <div className="bg-amber-0 rounded-md mt-2 mb-2 p-2 border-1 border-gray-200 bg-amber-0 ">
                <h1 className="text-md font-medium text-gray-700 mb-1 ">
                  heding
                </h1>
                <p className="text-sm text-gray-600 tracking-wide font-light ">
                  message
                </p>
                <div className="bg-amber-0 flex justify-end gap-2 text-gray-600">
                  <EyeIcon size={14} />
                  <div className="text-red-500">
                    <Trash2 size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
