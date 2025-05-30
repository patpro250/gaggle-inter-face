// @ts-nocheck

import { ReactNode } from "react";
import AsiderPageAdmin from "../../ui/adminAsider/page";
import NavBarAdminComponent from "../../ui/adminNavBar/page";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
// import useAuthGuard from "../../pagemiddlwere/AdminGuid/page";

interface Props {
  children: ReactNode;
}

const AdiminLayout = async ({ children }: Props) => {
  const sess = await auth();
  if (!sess) {
    redirect("/login");
  }

  // useAuthGuard();
  let name123 = sess.user.name;
  let code = sess.user.code;

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
            INSTITUTION CODE : <span className="text-amber-900">{code}</span>
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
        <div className="w-[90%] bg-gray-0 p-4 pb-30 pt-30 overflow-y-auto h-[100vh]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdiminLayout;
