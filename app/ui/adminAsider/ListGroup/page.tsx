"use client";
import {
  BarChart,
  CalendarCheck2,
  ChevronDown,
  FilePlus2,
  House,
  LibraryBig,
  Settings,
  ShieldUser,
  StickyNote,
  TimerReset,
  X,
} from "lucide-react";

import { Poppins as PoppinsFont } from "next/font/google";
import { usePathname } from "next/navigation";
import ListComponent from "../listcompnent/page";
import UserManagement from "./UserManagement/page";
import { Button } from "@radix-ui/themes";

const poppins = PoppinsFont({
  subsets: ["latin"], // Specify the character set
  weight: ["200"], // Choose the font weights
});

const ListGroup = () => {
  const path = usePathname();
  return (
    <div>
      <ul className="space-y-2 list-none">
        <p className="font-sans text-xs mt-2 mb-4 text-black"></p>
        <li>
          <ListComponent
            title="Home"
            href="/admin"
            SubIcon={null}
            Icon={House}
            Path={path}
          />
        </li>
      </ul>

      {/* Library Management Section */}
      <ul className="space-y-2 list-none">
        <p className="font-sans text-xs mt-2 mb-4 text-black">Library</p>
        <li>
          <ListComponent
            title="Librarians"
            href="/admin/Librarian"
            SubIcon={null}
            Icon={ShieldUser}
            Path={path}
          />
        </li>

        <li>
          <ListComponent
            title="Books"
            href="/admin/Book"
            SubIcon={null}
            Icon={LibraryBig}
            Path={path}
          />
        </li>
        {/* <li>
          <BorrowingManagement Path={path} />
        </li>
        <li>
          <ReservationBook Path={path} />
        </li> */}
      </ul>

      {/* Librarian Management Section */}
      <ul className="space-y-2 list-none">
        <p className="font-sans text-xs mt-2 mb-4 text-black">Report</p>
        {/* <li>
          <ListComponent
            title="View personal tasks"
            href="/admin/LibrarianDashboard/tasks"
            SubIcon={null}
            Icon={CalendarCheck2}
            Path={path}
          />
        </li> */}

        <li>
          <ListComponent
            title="Generate reports "
            href="/admin/LibrarianDashboard/reports"
            SubIcon={null}
            Icon={FilePlus2}
            Path={path}
          />
        </li>
      </ul>
      <ul className="space-y-2 list-none">
        <p className="font-sans text-xs mt-2 mb-4 text-black">My Account</p>
        <li>
          <ListComponent
            title="Account"
            href="/admin/Account"
            SubIcon={null}
            Icon={BarChart}
            Path={path}
          />
        </li>
      </ul>
      {/* Analytics & Reports Section */}
      {/* <ul className="space-y-2 list-none">
        <p className="font-sans text-xs mt-2 mb-4 text-black">
          Analytics & Reports
        </p>
        <li>
          <ListComponent
            title="Reports"
            href="/admin/reports"
            SubIcon={ChevronDown}
            Icon={BarChart}
            Path={path}
          />
        </li>
      </ul> */}

      {/* Settings Section */}
      <ul className="space-y-2 list-none">
        <p className="font-sans text-xs mt-2 mb-4 text-black">Settings</p>
        <li>
          <ListComponent
            title="Settings"
            href="/admin/settings"
            SubIcon={null}
            Icon={Settings}
            Path={path}
          />
        </li>
      </ul>

      <div className=" rounded-md p-2 mt-6  bg-gradient-to-br from-[#77afc3] via-[#2dccf9]/50 to-[#2dccf9]/90">
        <div className=" flex justify-end text-right ">
          <div className="border-1 border-gray-600 rounded-full p-1 ">
            <X size={14} color="gray" />
          </div>
        </div>
        <h1 className="text-md font-medium text-gray-700 mb-3">
          Upgrade✨ Your Plan for More Power!
        </h1>
        <p className="text-sm tracking-wide font-light leading-5">
          Unlock 🌟 premium features and take your experience to the next level.
          Upgrade now !
        </p>
        <div className="text-right pr-3">
          <button className=" hover:bg-white transition-all duration-100 border-1 border-white text-gray-700 mt-2 rounded-md p-1 text-[10px] ">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListGroup;
