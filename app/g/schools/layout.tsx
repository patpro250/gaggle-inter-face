import { ReactNode } from "react";
import Sidebar from "./SideBar";
import React from "react";
import Greetings from "./Greetings";

const SchoolsDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-4 h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <Greetings />
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default SchoolsDashboardLayout;
