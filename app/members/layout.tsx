import { ReactNode } from "react";
import { DesktopNav, MobileNav } from "./MembersNavBar";

const MembersLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-40 my-8 max-md:mx-4">
      <DesktopNav />
      {children}
      <MobileNav />
    </div>
  );
};

export default MembersLayout;
