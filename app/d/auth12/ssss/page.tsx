import NavbarCP from "@/app/component/web/nav copy/page";
import Navbar from "@/app/component/web/nav/page";

const Step3 = () => {
  return (
    <div>
      <h1> Step 1</h1>
      <div className="w-full bg-amber-0 min-h-[300px] flex flex-col justify-center items-center ">
        <div className=" max-w-3xl text-center">
          <h1 className="text-4xl font-medium text-indigo-600 mb-4">
            Registration Successful 🎉
          </h1>
          <p className="text-gray-700 mb-6">
            Your account has been created successfully. You can now log in.
          </p>
          <a
            href="/login"
            className="inline-block bg-indigo-500 w-full text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition-colors"
          >
            Go to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Step3;
