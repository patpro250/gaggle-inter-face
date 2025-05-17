"use client";
import { HoverCard } from "@radix-ui/themes";

import React, { useState } from "react";
import Account from "../accountWighet/page";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LogoutBoxModal from "../logout/page";
interface Props {
  nameInsititution: string;
}
const NavBarAdminComponent = ({ nameInsititution }: Props) => {
  // const firstLetter = nameInsititution.trim().charAt(0).toUpperCase();
  const firstLetter = "A";
  const [showBar, setBar] = useState(false);
  const [showLogout, setLogout] = useState(false);

  const BackgroundUser = (letter: string) => {
    const letterColors = {
      A: "#FF0000", // Red
      B: "#0000FF", // Blue
      C: "#00FF00", // Green
      D: "#FFFF00", // Yellow
      E: "#FFA500", // Orange
      F: "#800080", // Purple
      G: "#008000", // Dark Green
      H: "#FFC0CB", // Pink
      I: "#A52A2A", // Brown
      J: "#D3D3D3", // Light Gray
      K: "#000000", // Black
      L: "#FFFFFF", // White
      M: "#FFD700", // Gold
      N: "#C0C0C0", // Silver
      O: "#808080", // Gray
      P: "#800000", // Maroon
      Q: "#FF6347", // Tomato
      R: "#FF4500", // OrangeRed
      S: "#32CD32", // LimeGreen
      T: "#40E0D0", // Turquoise
      U: "#EE82EE", // Violet
      V: "#F0E68C", // Khaki
      W: "#FF1493", // DeepPink
      X: "#8B0000", // DarkRed
      Y: "#9ACD32", // YellowGreen
      Z: "#4B0082", // IndigC",
    };
    const letter__bg = letterColors[letter];
    return letter__bg;
  };

  const bg_color = BackgroundUser(firstLetter);

  function Logout() {
    setLogout((prev) => !prev);
  }

  function menu() {
    setBar((prev) => !prev);
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
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <!-- Profile dropdown --> */}
              <div className="relative ml-3">
                <div>
                  <HoverCard.Root>
                    <HoverCard.Trigger>
                      <button
                        type="button"
                        style={{ backgroundColor: bg_color }}
                        className={`relative flex items-center  justify-center  rounded-md  shadow text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden`}
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        {/* <img
                          className="size-8 rounded-full"
                          src="image.svg"
                          alt=""
                        /> */}
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

                {/* account wget */}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {showBar && (
          <div
            className="sm:hidden transform translate-y-6 duration-200 ease-in-out py-6 absolute z-30 bg-sky-50 shadow-2xl w-full h-full top-10 "
            id="mobile-menu"
          >
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* <!-- Current: "bg-gray-200 text-white", Default: "text-gray-500 hover:bg-gray-200 hover:text-gray-600" --> */}
              <Link
                href="#"
                className="block rounded-md bg-gray-200 px-3 py-2 text-base font-narmal text-white"
                aria-current="page"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="block rounded-md px-3 py-2 text-base font-narmal text-gray-500 hover:bg-gray-200 hover:text-gray-600"
              >
                Team
              </Link>
              <Link
                href="#"
                className="block rounded-md px-3 py-2 text-base font-narmal text-gray-500 hover:bg-gray-200 hover:text-gray-600"
              >
                Projects
              </Link>
              <Link
                href="#"
                className="block rounded-md px-3 py-2 text-base font-narmal text-gray-500 hover:bg-gray-200 hover:text-gray-600"
              >
                Calendar
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBarAdminComponent;
