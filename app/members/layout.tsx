import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { auth } from "../auth";
import { DesktopNav, MobileNav } from "./MembersNavBar";

const MembersLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (
    !session ||
    (session.user &&
      (session.user as { userType?: string }).userType !== "Member")
  ) {
    redirect("/login");
  }

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
