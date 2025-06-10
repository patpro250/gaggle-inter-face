import { LucideProps } from "lucide-react";
import React, { FC } from "react";
interface Props {
  title: string;
  href: string;
  SubIcon: FC<LucideProps | null>;
  Icon: FC<LucideProps>;
  Path: string;
}

import { Poppins as PoppinsFont } from "next/font/google";

const poppins = PoppinsFont({
  subsets: ["latin"], // Specify the character set
  weight: ["200"], // Choose the font weights
});

const ListComponentOnly: React.FC<Props> = ({
  title,
  href,
  SubIcon,
  Icon,
  Path,
}: Props) => {
  const pathSegments = Path.split("/").filter(Boolean);
  const firstSegment = pathSegments[0];
  const secondSegment = pathSegments[1];
  const newPath = `/${firstSegment}/${secondSegment}`;

  return (
    <div>
      <button
        className={`flex relative ${
          href === newPath
            ? "bg-indigo-100 border-l-4 border-indigo-400 text-white  "
            : "bg-amber-0 "
        }  hover:bg-indigo-300 border-l-0 px-2 md:px-2 py-3 md:py-2  border-indigo-500 items-center  w-full text-sm  font-normal  rounded-lg transition duration-75 group   text-black ml-0 md:ml-1`}
      >
        <div className="text-black mr-2  md:mr-0 text-[60px]  ">
          <Icon strokeWidth={1} />
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
    </div>
  );
};

export default ListComponentOnly;
