"use client";
import {
  BarChart,
  CalendarCheck2,
  ChevronDown,
  House,
  LibraryBig,
  Settings,
  ShieldUser,
  StickyNote,
} from "lucide-react";

import { Poppins as PoppinsFont } from "next/font/google";
import { usePathname } from "next/navigation";
import ListComponent from "../listcompnent/page";
import UserManagement from "./UserManagement/page";

const poppins = PoppinsFont({
  subsets: ["latin"], // Specify the character set
  weight: ["200"], // Choose the font weights
});

const ListGroup = () => {
  const path = usePathname();
  return (
    <div>
      <ul className="space-y-2 list-none">
        <p className="font-sans text-xs mt-2 mb-4 text-black">Main</p>
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
        <p className="font-sans text-xs mt-2 mb-4 text-black">
          Library Management
        </p>
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
        <p className="font-sans text-xs mt-2 mb-4 text-black">
          Librarian Dashboard
        </p>
        <li>
          <ListComponent
            title="View personal tasks"
            href="/admin/LibrarianDashboard/tasks"
            SubIcon={null}
            Icon={CalendarCheck2}
            Path={path}
          />
        </li>

        <li>
          <ListComponent
            title="Generate reports "
            href="/admin/LibrarianDashboard/reports"
            SubIcon={null}
            Icon={StickyNote}
            Path={path}
          />
        </li>
      </ul>
      <ul className="space-y-2 list-none">
        <p className="font-sans text-xs mt-2 mb-4 text-black">
          User Management
        </p>
        <li>
          <UserManagement Path={path} />
        </li>
      </ul>
      {/* Analytics & Reports Section */}
      <ul className="space-y-2 list-none">
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
      </ul>

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
    </div>
  );
};

export default ListGroup;
