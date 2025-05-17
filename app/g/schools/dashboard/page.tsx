
import { auth } from "@/app/auth";

import AddBookModal from "../_components/AddBookModal";
import ActionButtons from "./ActionButtons";
import Analytics from "./Analytics";
import Overview from "./Overview";
import { LogoutButton } from "@/app/login/Logout";
import { getApiClient } from "../axios";

export const metadata = {
  title: "School Dashboard",
  description: "Overview of the schools dashboard",
};

const SchoolsDashboard = async () => {
  const session = await auth();
  const api = await getApiClient();
  const res = await api.get('/librarians/analytics');
  const { topBooksData, borrowingTrendsData } = res.data;
  return (
    <>
      <ActionButtons />
      <h1 className="library-title">Overview</h1>
      <Overview />
      <Analytics borrowingTrendsData={borrowingTrendsData} topBooksData={topBooksData} />
      {/* <h1 className="text-white text-2xl">{session.accessToken}</h1> */}
    </>
  );
};

export default SchoolsDashboard;
