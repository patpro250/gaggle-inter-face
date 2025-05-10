import Navbar from "@/app/component/web/nav/page";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Auth12 = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-r  from-blue-50 to-white h-screen">
        {children}
      </main>
    </>
  );
};

export default Auth12;
