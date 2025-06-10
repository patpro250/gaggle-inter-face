"use client";

import AvatarDropdown from "@/app/g/schools/_components/AvatarDropdown";
import { useState } from "react";
import LogoutBoxModal from "../logout/page";
interface Props {
  nameInsititution: string;
}
const NavBarAdminComponent = ({ nameInsititution }: Props) => {
  // const firstLetter = nameInsititution.trim().charAt(0).toUpperCase();

  const [showLogout, setLogout] = useState(false);

  function Logout() {
    setLogout((prev) => !prev);
  }

  return (
    <div>
      {showLogout && <LogoutBoxModal IsLogout={Logout} />}
      <nav className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-2  sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <span className="text-xl text-indigo-600 font-medium uppercase ">
                  {nameInsititution} .
                </span>
              </div>
            </div>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div>
                  <HoverCard.Root>
                    <HoverCard.Trigger>
                      <button
                        type="button"
                        style={{ backgroundColor: bg_color }}
                        className={`relative flex items-center  justify-center  rounded-full  shadow text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden`}
                        id="user-   -button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span className="w-9 h-9 text-xl text-white flex items-center  justify-center">
                          {firstLetter}
                        </span>
                      </button>
                    </HoverCard.Trigger>

                    <HoverCard.Content
                      className="HoverCardContent w-2xl h-3"
                      sideOffset={2}
                      height="100"
                      width="100"
                    >
                      <Account IsLogout={Logout} />
                    </HoverCard.Content>
                  </HoverCard.Root>
                </div>
              </div>
            </div> */}

            <AvatarDropdown />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarAdminComponent;
