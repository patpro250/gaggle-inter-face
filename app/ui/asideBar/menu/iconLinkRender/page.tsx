import React from "react";
import Link from "next/link"; // Or <a> if not using Next.js
import { FaHome } from "react-icons/fa"; // Example of React icon, replace with your desired icon

const NavItem = ({
  href = "",
  label = "D",
  Icon = FaHome,
  iconSize = 18,
  Iconoption = "fahome",
}) => {
  return (
    <li>
      <Link
        className="duration-100 ease-out flex items-center justify-between hover:bg-indigo-100 px-3 py-2 text-gray-600 hover:border-l-[4px] rounded-sm border-sky-400"
        href={href}
      >
        <div className="flex items-center font-thin gap-5 text-md">
          <Icon size={iconSize} /> <span>{label}</span>
        </div>
        <Iconoption />
      </Link>
    </li>
  );
};

export default NavItem;
