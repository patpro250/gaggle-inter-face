"use client";

import AvatarDropdown from "@/app/g/schools/_components/AvatarDropdown";

interface Props {
  nameInsititution: string;
}
const NavBarAdminComponent = ({ nameInsititution }: Props) => {
  // function menu() {
  //   setBar((prev) => !prev);
  // }

  return (
    <div>
      <nav className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-2  sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {nameInsititution}
                </span>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <!-- Profile dropdown --> */}
              <AvatarDropdown />
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      </nav>
    </div>
  );
};

export default NavBarAdminComponent;
