import MemberOfTheWeek from "./MemberOfTheWeek";
import MembersOverview from "./MembersOverview";
import MembersTable from "./MembersTable";

const MembersPage = () => {
  return (
    <>
      <h1 className="library-title">Members</h1>
      <MembersOverview />
      <MemberOfTheWeek />
      <h1 className="library-subtitle mt-4">List of members</h1>
      <MembersTable />
    </>
  );
};

export default MembersPage;
