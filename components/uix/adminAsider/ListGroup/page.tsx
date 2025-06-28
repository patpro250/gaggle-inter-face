"use client";
import ListComponent from "@/components/listcompnent/listcomponent";
import {
  ChartSpline,
  CircleDollarSign,
  CircleUserRound,
  House,
  Plane,
  ShieldCheck,
  X,
} from "lucide-react";

import { usePathname } from "next/navigation";

const Root = "/d/admin";
const ListGroup = () => {
  const path = usePathname();
  return (
    <div>
      <ul className="space-y-2 list-none">
        <p className="font-sans text-xs mt-2 mb-4 text-black"></p>
        <li>
          <ListComponent
            title="Home"
            href={`${Root}`}
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
            href={`${Root}/Librarian`}
            SubIcon={null}
            Icon={ShieldCheck}
            Path={path}
          />
        </li>

        {/* <li>
          <ListComponent
            title="Books"
            href="/admin/Book"
            SubIcon={null}
            Icon={LibraryBig}
            Path={path}
          />
        </li> */}
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
        <li>
          <ListComponent
            title="Payment Manager"
            href={`${Root}/payment`}
            SubIcon={null}
            Icon={CircleDollarSign}
            Path={path}
          />
        </li>
        <li>
          <ListComponent
            title="Plans"
            href={`${Root}/plans`}
            SubIcon={null}
            Icon={Plane}
            Path={path}
          />
        </li>

        <li>
          <ListComponent
            title="Data Analytics"
            href={`${Root}/LibrarianDashboard/reports`}
            SubIcon={null}
            Icon={ChartSpline}
            Path={path}
          />
        </li>
      </ul>
      <ul className="space-y-2 list-none">
        <p className="font-sans text-xs mt-2 mb-4 text-black">My Account</p>
        <li>
          <ListComponent
            title="Account"
            href={`${Root}/Account`}
            SubIcon={null}
            Icon={CircleUserRound}
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
      {/* <ul className="space-y-2 list-none">
        <p className="font-sans text-xs mt-2 mb-4 text-black">Settings</p>
        <li>
          <ListComponent
            title="Settings"
            href={`${Root}settings`}
            SubIcon={null}
            Icon={Settings}
            Path={path}
          />
        </li>
      </ul> */}

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
