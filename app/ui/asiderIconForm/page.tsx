import { Box } from "@radix-ui/themes";
import React from "react";
interface Props {
  grandImage: string;
  petitImage: string;
}
const IconForm = ({ grandImage, petitImage }: Props) => {
  return (
    <>
      <div className="  hidden lg:block items-center justify-center h-[100vh] flex-1">
        <div className=" relative bg-transparent m-auto mt-36">
          <div className=" mx-auto border-sky-800  bg-gray-300 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white ">
              <img
                src={grandImage}
                className="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg"
                alt=""
              />
              <img
                src={grandImage}
                className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className="relative mx-auto bg-sky-800 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-sky-600"></div>
          </div>
          {/* start mark up */}
          <div className="  absolute left-[2rem] border-8 border-sky-800 z-10  h-40 w-40 overflow-hidden top-40 -bottom-20   bg-white rounded-md shadow ">
            <img className="h-[100%] w-[100%]" src={petitImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default IconForm;
