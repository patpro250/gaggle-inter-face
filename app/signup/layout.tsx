import React, { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
interface Props {
  children: ReactNode;
}
const layout = ({ children }: Props) => {
  return (
    <div>
  <Link href="/">
  <button
    className="inline-flex items-center gap-2 bg-sub-primary-primary hover:bg-primary text-white font-medium px-5 py-2.5 rounded-full shadow-lg transition-all duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <ArrowLeft size={18} className="mt-[1px]" />
    Back to Home
  </button>
</Link>

      {/* <Navbar /> */}
      {children}
    </div>
  );
};

export default layout;
