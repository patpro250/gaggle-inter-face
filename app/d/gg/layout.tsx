import React, { ReactNode } from "react";
import Header from "./cmp/header";
import Asider from "./cmp/Asider";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import CreatePlanModal from "@/app/_components/plansModal";
interface Props {
  children: ReactNode;
}
const GGLayout = async ({ children }: Props) => {
  const session = await auth();
  if (
    !session ||
    (session.user as { userType?: string }).userType !== "System Admin"
  )
    redirect("/login");

  return (
    <div className="dark">
      <div className="flex bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
        <CreatePlanModal />
        {/* Sidebar */}
        <Asider />
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header />
          {/* Main Section */}
          <main className=" flex-1   overflow-y-auto"> {children}</main>
        </div>
      </div>
    </div>
  );
};

export default GGLayout;
