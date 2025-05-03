// @ts-nocheck
import { auth } from "../../auth";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const Greetings = async () => {
  const session = await auth();
  const firstName = session?.user?.firstName ?? "there";
  const lastName = session?.user?.lastName ?? "";

  return (
    <div className="flex sm:flex-row-reverse items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <div className="flex items-center space-x-3">
        <img
          src="/10bg.png"
          alt="User Profile"
          className="w-10 h-10 rounded-full border-2 border-primary"
        />
      </div>

      <div className="max-sm:hidden">
        <p className="text-gray-600 dark:text-gray-300">
          {getGreeting()},{" "}
          <span className="text-gray-800 dark:text-white font-medium">
            {`${firstName} ${lastName}`}
          </span>
          !
        </p>
      </div>
    </div>
  );
};

export default Greetings;
