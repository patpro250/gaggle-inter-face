import { Flex } from "@radix-ui/themes";
import React from "react";
const Header = () => {
  return (
    <div>
      <Flex className="p-1 items-center space-x-2 border-b-1 border-gray-200 mb-5 ">
        <img className="h-15" src="/image.svg" alt="" />
        <div className="font-norma text-xl text-black opacity-70  font-medium tracking-tight ">
          GaggleNiti <span className="text-sky-600 ">Group</span>
        </div>
      </Flex>
    </div>
  );
};

export default Header;
