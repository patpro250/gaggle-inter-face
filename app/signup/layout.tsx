import React, { ReactNode } from "react";
import Navbar from "../web/nav/page";
import Link from "next/link";
interface Props {
  children: ReactNode;
}
const layout = ({ children }: Props) => {
  return (
    <div>
      <Link href={"/"}>
        <button className=" bg-primary font-semibold text-white rounded-md py-1 px-2 m-2  ">
          Back to Home
        </button>
      </Link>
      {/* <Navbar /> */}
      {children}
    </div>
  );
};

export default layout;
