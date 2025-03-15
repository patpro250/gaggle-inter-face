import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { HomeIcon, FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
import IconWithText from "./iconLinkRender/page";

import { CiUser } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import NavItem from "./iconLinkRender/page";
import { SiSimpleanalytics } from "react-icons/si";

const Menu = () => {
  return (
    <div>
      <Box className=" overflow-y-scroll no-scrollbar p-0">
        <ul>
          {/* <li>
            <Link
              className="duration-100 ease-out  flex items-center justify-between hover:bg-indigo-100 px-3 py-2 text-gray-600 hover:border-l-[4px] rounded-sm border-sky-400"
              href=""
            >
              <div className="flex items-center font-thin gap-5 text-md">
                <HomeIcon width={18} height={18} /> <Text>Home</Text>{" "}
              </div>
              <HomeIcon width={14} height={14} />
            </Link>
          </li> */}
          <NavItem Icon={IoHomeOutline} label="Home" href="/" />
          <NavItem Icon={CiUser} label="Users" href="/Users" />
          <NavItem Icon={SiSimpleanalytics} label="Analytcs" href="/Analytcs" />
          <NavItem
            Icon={SiSimpleanalytics}
            label="Criculation"
            href="/Criculation"
          />
          <NavItem Icon={SiSimpleanalytics} label="Catalog" href="/Catalog" />
          <NavItem
            Icon={SiSimpleanalytics}
            label="finance Management"
            href="/finance-Management"
          />
        </ul>
      </Box>
    </div>
  );
};

export default Menu;
