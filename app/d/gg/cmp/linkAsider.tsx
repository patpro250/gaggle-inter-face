import { Home, LucideProps } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
interface Props {
  title: string;
  href: string;
  Icon: FC<LucideProps>;
  Path: string;
}
const LinkAsider = ({ title, href, Icon, Path }: Props) => {
  return (
    <div>
      <Link
        href={href}
        className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md gap-3 text-gray-700 hover:text-indigo-600"
      >
        <Icon size={20} /> {title}
      </Link>
    </div>
  );
};

export default LinkAsider;
