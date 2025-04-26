import Link from "next/link";
import { APP_NAME } from "../../constants";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-2 px-4">
        <Link href={`/catalog`}>
          <div className="dark:text-gray-300 font-semibold text-xl">
            {APP_NAME} | <span className="text-xl font-normal">Catalog</span>
          </div>
        </Link>

        <ul className="flex items-center space-x-4">
          <li>
            <Link
              href={`/`}
              className="text-gray-700 hover:underline dark:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={`/about`}
              className="text-gray-700 hover:underline dark:text-gray-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link href={`/`} className="">
              <button className="button-rounded">Sign up</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
