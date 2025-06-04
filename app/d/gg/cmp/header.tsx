// @ts-nocheck
import { auth } from "@/app/auth";
import AvatarDropdown from "@/app/g/schools/_components/AvatarDropdown";
import React from "react";

export interface User {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  permissions: string[]; // You can replace with enum if needed
  token: string;
}
const Header = async () => {
  const session = await auth();

  const user = session?.user as User | undefined;

  return (
    <div>
      <header className="w-full flex justify-between px-6 py-4 bg-gray-50 dark:bg-gray-900 shadow">
        <div>
          <h1 className="text-2xl dark:text-primary font-medium">
            {user?.permissions && user.permissions.length > 0 && (
              <span className="text-xl dark:text-primary font-medium">
                {user.permissions[0]}
              </span>
            )}
          </h1>
          <p className="text-sm text-gray-800 dark:text-indigo-600 font-medium">
            {user?.firstName} {user?.lastName}
          </p>
        </div>
        <AvatarDropdown />
      </header>
    </div>
  );
};

export default Header;
