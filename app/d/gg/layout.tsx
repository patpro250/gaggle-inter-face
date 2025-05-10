import React, { ReactNode } from "react";
import Header from "./cmp/header";
import Asider from "./cmp/Asider";
interface Props {
  children: ReactNode;
}
const GGLayout = ({ children }: Props) => {
  return (
    <div className="dark">
      <div className="flex bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
        {/* Sidebar */}
        <Asider />
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header />
          {/* Main Section */}
          <main className="p-6 flex-1  overflow-y-auto">hello {children}</main>
        </div>
      </div>
    </div>
  );
};

export default GGLayout;
