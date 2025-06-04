// @ts-nocheck
import { ReactNode } from "react";
import { DesktopNav, MobileNav } from "./MembersNavBar";
import { Toaster } from "react-hot-toast";
import { auth } from "../auth";
import { redirect } from "next/navigation";

const MembersLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (!session || session.user.userType !== 'Member') redirect('/login');

  return (
    <>
      <DesktopNav />
      <div className="mx-40 my-7 max-md:mx-4 h-full">
        {children}
        <MobileNav />
      </div>
    </>
  );
};

export default MembersLayout;
