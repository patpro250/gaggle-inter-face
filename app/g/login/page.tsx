import { Text } from "@radix-ui/themes/dist/cjs/components/callout";
import Link from "next/link";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-md p-8 shadow-lg rounded-2xl bg-white dark:bg-gray-900 dark:text-white">
        <h2 className="text-3xl text-primary font-semibold text-center mb-6">
          Login
          <div className="absolute left-0 bottom-0 w-full h-1 bg-primary mt-2"></div>
        </h2>
        <form className="grid gap-4">
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 pl-12 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-primary"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full py-3 pl-12 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-primary"
            />
          </div>
          <div className="text-center w-full">
            <Text size="2">
              Don't have an account?{" "}
              <Link className="text-primary underline" href="/g/signup">
                Sign up
              </Link>
            </Text>
          </div>
          <button className="w-full mt-4 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition duration-300 dark:bg-primary-dark">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
