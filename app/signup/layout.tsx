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
  <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200 ease-in-out">
    <ArrowLeft size={16} /> Back to Home
  </button>
</Link>
      {/* <Navbar /> */}
      {children}
    </div>
  );
};

export default layout;
