import { ReactNode } from "react";
import { DesktopNav, MobileNav } from "./MembersNavBar";

const MembersLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-40 my-7 max-md:mx-4">
      <DesktopNav />
      {children}
      <MobileNav />
    </div>
  );
};

export default MembersLayout;
