"use client";
import {
  Activity,
  Building2,
  ChartNoAxesCombined,
  ChevronDown,
  House,
  Smile,
  Users,
} from "lucide-react";

import { Poppins as PoppinsFont } from "next/font/google";
import { usePathname } from "next/navigation";
import ListComponent from "../listcompnent/page";
import TriggleDropDown1 from "./triggleWithDropDown/page";

const poppins = PoppinsFont({
  subsets: ["latin"], // Specify the character set
  weight: ["200"], // Choose the font weights
});

usePathname;
const ListGroup = () => {
  return (
    <div>
      <ul className="space-y-2  list-none ">
        <p
          className={`${poppins.className} font-sans text-xs  mt-2    mb-4 text-black`}
        >
          main
        </p>

        <li>
          <ListComponent
            title={"Home"}
            href={"iraguha"}
            SubIcon={Smile}
            Icon={House}
          />
        </li>
        <TriggleDropDown1 />

        <li>
          <ListComponent
            title={"User Manager"}
            href={"iraguha"}
            SubIcon={ChevronDown}
            Icon={Users}
          />
        </li>

        <li>
          <ListComponent
            title={"Analytics"}
            href={"iraguha"}
            SubIcon={null}
            Icon={ChartNoAxesCombined}
          />
        </li>

        <li>
          <ListComponent
            title={"Campany"}
            href={"iraguha"}
            SubIcon={null}
            Icon={Building2}
          />
        </li>

        <li>
          <ListComponent
            title={"Stoke"}
            href={"iraguha"}
            SubIcon={null}
            Icon={Activity}
          />
        </li>
        <hr className="text-gray-200 mt-8 "></hr>
      </ul>
    </div>
  );
};

export default ListGroup;
