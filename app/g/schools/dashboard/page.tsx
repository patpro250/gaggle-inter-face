import { auth } from "../../../auth";
import LogoutButton from "../../../login/Logout";
import ActionButtons from "./ActionButtons";
import Overview from "./Overview";

export const metadata = {
  title: "Schools Dashboard",
  description: "Overview of the schools dashboard",
};

const SchoolsDashboard = async () => {
  const session = await auth();
  return (
    <>
      <ActionButtons />
      <h1 className="library-title">Overview</h1>
      <Overview />
      <LogoutButton />
      {/* <Analytics />  */}
    </>
  );
};

export default SchoolsDashboard;
