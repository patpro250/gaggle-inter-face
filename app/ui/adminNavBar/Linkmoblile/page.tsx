import { Link } from "@radix-ui/themes";

const LinkOnMoble = () => {
  return (
    <div>
      <div className="sm:hidden " id="mobile-menu">
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
            className="block rounded-md px-3 py-2 text-base font-normal text-gray-500 hover:bg-gray-200 hover:text-gray-600"
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
    </div>
  );
};

export default LinkOnMoble;
