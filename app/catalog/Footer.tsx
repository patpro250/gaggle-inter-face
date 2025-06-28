import Link from "next/link";
import { APP_NAME, COMPANY } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col fixed bottom-0 left-0 w-full mb-3">
      <div className="flex items-center justify-center px-6">
        <ul className="flex text-gray-900 dark:text-gray-400 space-x-4 text-sm">
          <li>
            <Link href={`/`} className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href={`/about`} className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href={`/contact`} className="hover:underline">
              Get in touch
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-center text-gray-900 dark:text-gray-400 text-sm">
        This catalog is officially hosted by{" "}
        <span className="dark:text-white text-gray-950">{COMPANY}</span> as part
        of{" "}
        <span className="text-primary">
          <Link href={`/`} className="hover:underline">
            {APP_NAME}
          </Link>{" "}
        </span>
        software!
      </p>
    </footer>
  );
};

export default Footer;
