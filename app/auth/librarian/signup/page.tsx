import { Text } from "@radix-ui/themes/dist/cjs/components/callout";
import Link from "next/link";
import { FaUser, FaPhone, FaLock, FaVenusMars } from "react-icons/fa";
import { APP_NAME } from "../../../constants";

export const metadata = {
  title: `Get started | ${APP_NAME}`,
  description: `Start using the beauty of ${APP_NAME} today.`,
};

export default function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-2xl max-sm:max-w-md p-8 shadow-lg rounded-2xl bg-white dark:bg-gray-900 dark:text-white">
        <h2 className="text-3xl text-primary font-semibold text-center mb-6">
          Sign Up
          <div className="absolute left-0 bottom-0 w-full h-1 bg-primary mt-2"></div>
        </h2>
        <form className="grid grid-cols-2 gap-4">
          <div className="relative max-sm:col-span-2">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="First Name"
              className="w-full py-3 pl-12 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-primary"
            />
          </div>
          <div className="relative max-sm:col-span-2">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full py-3 pl-12 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-primary"
            />
          </div>
          <div className="relative col-span-2">
            <FaVenusMars className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <select className="w-full py-3 pl-12 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-primary">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="relative col-span-2">
            <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 rotate-90" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full py-3 pl-12 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-primary"
            />
          </div>
          <div className="relative max-sm:col-span-2">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full py-3 pl-12 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-primary"
            />
          </div>
          <div className="relative max-sm:col-span-2">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="password"
              placeholder="Repeat Password"
              className="w-full py-3 pl-12 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-primary"
            />
          </div>
          <div className="text-center w-full col-span-2">
            <Text size="2">
              By signing up you accept our{" "}
              <Link className="text-primary underline" href="/terms">
                Terms
              </Link>{" "}
              and{" "}
              <Link className="text-primary underline" href="/privacy">
                privacy
              </Link>
            </Text>
          </div>
          <div className="text-center w-full col-span-2">
            <Text size="2">
              Already have an account?{" "}
              <Link
                className="text-primary underline"
                href="/auth/librarian/login"
              >
                Login
              </Link>
            </Text>
          </div>
          <button className="col-span-2 w-full mt-4 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition duration-300 dark:bg-primary-dark">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
