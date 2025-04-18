import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r  from-blue-50 to-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl flex  items-center justify-center gap-1 font-bold text-blue-600 "
        >
          <span>
            <Image src={"/image.svg"} width={50} height={50} alt={""}></Image>
          </span>{" "}
          <span className="text-indigo-900">Niti</span>{" "}
          <span className="text-sky-600">Book</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-700 ">
          <Link href="/" className="hover:text-blue-400  ">
            Home
          </Link>
          <Link href="/features" className="hover:text-blue-400  ">
            Features
          </Link>
          <Link href="/plans" className="hover:text-blue-400  ">
            Plans
          </Link>
          <Link href="/about" className="hover:text-blue-400   ">
            About
          </Link>
        </nav>

        {/* Sign In */}
        <div className="flex gap-3">
          <Link
            href="/pagnation-page/"
            className="bg-blue-0 text-sm border-1 border-gray-200 hover:bg-blue-50 text-gray-700 font-medium py-1 px-4 rounded-md transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
