import { ReactNode } from "react";

import { auth } from "@/app/auth";
import NavBarAdminComponent from "@/components/adminNavBar/page";
import AsiderPageAdmin from "@/components/uix/adminAsider/page";
import { redirect } from "next/navigation";
interface Props {
  children: ReactNode;
}

const AdiminLayout = async ({ children }: Props) => {
  const sess = await auth();
  if (!sess) {
    redirect("/login");
  }

  // useAuthGuard();
  interface UserWithCode {
    name: string;
    code?: string;
    [key: string]: unknown;
  }

  const user = sess.user as UserWithCode;
  const name123 = user.name;
  const code = user.code ?? "";

  // const [isClient, setIsClient] = useState(false); // Added to check if we're on the client side

  // useEffect(() => {
  //   setIsClient(true); // This will be true after the component mounts
  // }, []);

  // const [dateTime, setDateTime] = useState<string>("");
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const currentDateTime = new Date();

  //     const formattedDate = currentDateTime.toLocaleString("en-US", {
  //       weekday: "long",
  //       year: "numeric",
  //       month: "long",
  //       day: "numeric",
  //       hour: "numeric",
  //       minute: "numeric",
  //       second: "numeric",
  //       hour12: true,
  //     });

  //     setDateTime(`${formattedDate}`);
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className=" h-[100vh] overflow-hidden ">
      <NavBarAdminComponent nameInsititution={name123} />
      <div className=" bg-primary p-1 flex justify-center align-middle items-center text-white text-base font-medium">
        <span className=" uppercase ">
          <span className="bg-indigo-500 ms-5 text-sm font-semibold px-2 rounded-sm">
            WELCOME TO <span className="text-amber-900">{name123}</span>
          </span>{" "}
          <span className="bg-indigo-500 ms-5 text-sm font-semibold px-2 rounded-sm">
            INSTITUTION CODE :{" "}
            <span className="text-amber-900 cursor-pointer hover:underline">
              {code}
            </span>
          </span>{" "}
        </span>
        <span className="bg-indigo-500 ms-5 text-sm font-semibold px-2 rounded-sm">
          {/* {dateTime || "Loading.."} */}
        </span>
      </div>
      <main className="overflow-hidden h-[100vh] flex">
        <div>
          <AsiderPageAdmin />
        </div>
        <div className="w-[90%] bg-gray-0 p-4 pb-30 pt-10 overflow-y-auto h-[100vh]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdiminLayout;
