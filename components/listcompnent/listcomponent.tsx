import { LucideProps } from "lucide-react";
import React, { FC } from "react";
interface Props {
  title: string;
  href: string;
  SubIcon: FC<LucideProps | null>;
  Icon: FC<LucideProps>;
  Path: string;
}

import Link from "next/link";

const ListComponent: React.FC<Props> = ({
  title,
  href,
  SubIcon,
  Icon,
  Path,
}: Props) => {
  return (
    <div>
      <Link href={href}>
        <button
          className={`flex relative ${
            href === Path
              ? "bg-indigo-100 border-l-4 border-primary text-white  "
              : "bg-amber-0 "
          }  hover:bg-primary border-l-0 px-2 md:px-2 py-3 md:py-2  border-primary items-center  w-full text-base  font-normal  rounded-lg transition duration-75 group   text-black ml-0 md:ml-1`}
        >
          <div className="text-black mr-2  md:mr-0 text-[20px]  ">
            <Icon size={20} strokeWidth={1} />
          </div>

          <div
            className={` flex-1 ml-3 capitalize  text-black text-sm  hidden md:block text-left `}
          >
            {title}
          </div>

          <div className="text-black  text-[60px]  ">
            {SubIcon && <SubIcon strokeWidth={1} />}
          </div>
        </button>
      </Link>
    </div>
  );
};

export default ListComponent;
