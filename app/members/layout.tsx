import { ReactNode } from "react";
import { DesktopNav, MobileNav } from "./MembersNavBar";
import { Toaster } from "react-hot-toast";

const MembersLayout = ({ children }: { children: ReactNode }) => {
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
