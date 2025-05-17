import { useRouter } from "next/navigation";
import { auth } from "@/app/auth";
interface Props {
  IsLogout: () => void;
}
// const {} = auth();
const Account = ({ IsLogout }: Props) => {
  const router = useRouter();

  return (
    <>
      <div
        id="dropdownInformation"
        className="z-10  bg-white divide-y divide-gray-100 rounded-lg  dark:bg-white "
      >
        <div className="px-4 py-3 text-sm text-gray-500 dark:text-gray-900">
          <div className="text-indigo-600">MD</div>
          <div className="font-medium truncate">iraguha</div>
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
