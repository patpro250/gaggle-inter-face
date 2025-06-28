import React from "react";
import Image from "next/image";

interface Props {
  grandImage: string;
  petitImage: string;
}

const IconForm = ({ grandImage, petitImage }: Props) => {
  return (
    <div className="hidden lg:flex items-center justify-center h-[100vh] flex-1">
      <div className="relative bg-transparent m-auto mt-36">
        <div className="mx-auto border-sky-800 bg-gray-300 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
          <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white relative">
            <Image
              src={grandImage}
              alt=""
              fill
              className="dark:hidden rounded-lg object-cover"
            />
            <Image
              src={grandImage}
              alt=""
              fill
              className="hidden dark:block rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="relative mx-auto bg-sky-800 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-sky-600"></div>
        </div>

        {/* small image */}
        <div className="absolute left-[2rem] border-8 border-sky-800 z-10 h-40 w-40 overflow-hidden top-40 bg-white rounded-md shadow relative">
          <Image src={petitImage} alt="" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default IconForm;
