import Link from "next/link";
import React from "react";
import useAuthGuard from "../../middlwere/AdminGuid/page";
import { useRouter } from "next/navigation";
import Logout from "../logout/page";
interface Props {
  IsLogout: () => void;
}
const Account = ({ IsLogout }: Props) => {
  const router = useRouter();
  useAuthGuard();

  const token = localStorage.getItem("x-auth-token");

  const payload = JSON.parse(atob(token.split(".")[1]));
  console.log(payload);
  console.log("Payload 2 : ", payload.email);
  const email = payload.email;
  const institutionName = payload.name;
  return (
    <>
      <div
        id="dropdownInformation"
        className="z-10  bg-white divide-y divide-gray-100 rounded-lg  dark:bg-white "
      >
        <div className="px-4 py-3 text-sm text-gray-500 dark:text-gray-900">
          <div className="text-indigo-600">{institutionName}</div>
          <div className="font-medium truncate">{email}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformationButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-500 rounded-md"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-500 rounded-md"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-500 rounded-md"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="#"
            onClick={IsLogout}
            className="px-4 py-2 text-sm  ms-1 me-1 rounded-md flex items-center justify-between text-black  bg-red-400  "
          >
            Sign out
          </a>
        </div>
      </div>
    </>
    // </div>
  );
};

export default Account;
