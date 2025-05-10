import NavbarCP from "@/app/component/web/nav copy/page";
import Navbar from "@/app/component/web/nav/page";

const Step3 = () => {
  return (
    <div>
      <h1> Step 1</h1>
      <div className="w-full bg-amber-0 min-h-[300px] flex flex-col justify-center items-center ">
        <form className="w-md mx-auto  p-6   space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Institution Address"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Opening Hour
            </label>
            <input
              type="email"
              id="email"
              placeholder="Opening Hour"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="email"
              id="email"
              placeholder="Phone"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              type
            </label>
            <select
              id="email"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Choose Institution Type</option>
              <option value="UNIVERSITY">University</option>
              <option value="COLLEGE">College</option>
              <option value="SCHOOL">School</option>
              <option value="PUBLIC_LIBRARY">Public Library</option>
              <option value="PRIVATE_LIBRARY">Private Library</option>
              <option value="NON_PROFIT">Non Profit</option>
              <option value="OTHER">Other</option>
            </select>

            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="Password"
              id="email"
              placeholder="Phone"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <label htmlFor="">
              {" "}
              <input type="checkbox" /> show password
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step3;
