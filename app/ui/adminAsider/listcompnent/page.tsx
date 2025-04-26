import { Captions, LucideIcon, LucideProps } from "lucide-react";
import React, { FC } from "react";
interface Props {
  title: string;
  href: string;
  SubIcon: FC<LucideProps | null>;
  Icon: FC<LucideProps>;
  Path: string;
}

import { Poppins as PoppinsFont } from "next/font/google";
import Link from "next/link";

const poppins = PoppinsFont({
  subsets: ["latin"], // Specify the character set
  weight: ["200"], // Choose the font weights
});

const ListComponent: React.FC<Props> = ({
  title,
  href,
  SubIcon,
  Icon,
  Path,
}: Props) => {
  const Icon12 = Icon;
  return (
    <div>
      <Link href={href}>
        <button
          className={`flex relative ${
            href === Path
              ? "bg-indigo-100 border-l-4 border-indigo-400 text-white  "
              : "bg-amber-0 "
          }  hover:bg-indigo-300 border-l-0 px-2 md:px-2 py-3 md:py-2  border-indigo-500 items-center  w-full text-base  font-normal  rounded-lg transition duration-75 group   text-black ml-0 md:ml-1`}
        >
          <div className="text-black mr-2  md:mr-0 text-[20px]  ">
            <Icon size={20} strokeWidth={1} />
          </div>

          <div
            className={`${poppins.className} flex-1 ml-3 capitalize  text-black text-sm  hidden md:block text-left `}
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
