import { auth } from "../../../auth";
import LogoutButton from "../../../login/Logout";
import AddBookModal from "../_components/AddBookModal";
import ActionButtons from "./ActionButtons";
import Analytics from "./Analytics";
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
      <Analytics /> 
      <AddBookModal />
      {/* <LogoutButton /> */}
      {/* <h1 className="text-white text-2xl">{session.accessToken}</h1> */}
    </>
  );
};

export default SchoolsDashboard;
