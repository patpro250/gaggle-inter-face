import InsititutionInfo from "./insititutionInfo";
import Profile from "./profile";
import Starts from "./starts";

export default async function InstitutionProfile() {
  return (
    <div className=" overflow-scroll p-4  mx-auto  space-y-6">
      {/* Profile Section */}
      <Profile />

      {/* Institution and Location Info */}
      <InsititutionInfo />

      {/* Stats */}

      <Starts />
    </div>
  );
}
