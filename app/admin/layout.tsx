import React, { ReactNode } from "react";
import NavBarAdminComponent from "../ui/adminNavBar/page";
import AsiderPageAdmin from "../ui/adminAsider/page";

interface Props {
  children: ReactNode;
}
const AdiminLayout = ({ children }: Props) => {
  return (
    <div className=" h-[100vh] overflow-hidden ">
      <NavBarAdminComponent />

      <main className="overflow-hidden h-[100vh]  flex   ">
        <div>
          <AsiderPageAdmin />
        </div>
        <div className=" w-[90%] bg-gray-50 p-4  overflow-y-auto h-[100vh] ">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdiminLayout;
