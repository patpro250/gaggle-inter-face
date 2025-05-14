
import { auth } from "@/app/auth";

import AddBookModal from "../_components/AddBookModal";
import ActionButtons from "./ActionButtons";
import Analytics from "./Analytics";
import Overview from "./Overview";
import { SignOut } from "@/app/login/Logout";

export const metadata = {
  title: "School Dashboard",
  description: "Overview of the schools dashboard",
};

const SchoolsDashboard = async () => {
  const session = await auth();
  return (
    <>
      <ActionButtons />
      <h1 className="library-title">Overview</h1>
      {/* <Overview /> */}
      <p className="text-white">{session.user.email}</p>
      <Analytics />
      <SignOut />
      {/* <h1 className="text-white text-2xl">{session.accessToken}</h1> */}
    </>
  );
};

export default SchoolsDashboard;
