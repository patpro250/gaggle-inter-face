import Link from "next/link";
import React from "react";
import Account from "../ui/accountWighet/page";
import { HoverCard } from "@radix-ui/themes";

const NavBarAdmin = () => {
  return (
    <div>
      <nav className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-600 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="image.svg"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-200 text-white", Default: "text-gray-500 hover:bg-gray-200 hover:text-gray-600" --> */}
                  <Link
                    href="#"
                    className="rounded-md bg-gray-200 px-3 py-2 text-sm font-normal text-gray-500"
                    aria-current="page"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-narmal text-gray-500 hover:bg-gray-200 hover:text-gray-600"
                  >
                    Team
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-narmal text-gray-500 hover:bg-gray-200 hover:text-gray-600"
                  >
                    Projects
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-narmal text-gray-500 hover:bg-gray-200 hover:text-gray-600"
                  >
                    Calendar
                  </Link>
                </div>
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
                        className="relative flex  rounded-full bg-gray-200 shadow text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <img
                          className="size-8 rounded-full"
                          src="image.svg"
                          alt=""
                        />
                      </button>
                    </HoverCard.Trigger>

                    <HoverCard.Content
                      className="HoverCardContent w-2xl h-3"
                      sideOffset={2}
                      height="100"
                      width="100"
                    >
                      <Account />
                    </HoverCard.Content>
                  </HoverCard.Root>
                </div>

                {/* account wget */}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
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
      </nav>
      ;
    </div>
  );
};

export default NavBarAdmin;
