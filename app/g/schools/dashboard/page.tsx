import ActionButtons from "./ActionButtons";
import Analytics from "./Analytics";
import Overview from "./Overview";

const SchoolsDashboard = () => {
  return (
    <>
      <ActionButtons />
      <h1 className="library-title">Overview</h1>
      <Overview />
      <Analytics />
    </>
  );
};

export default SchoolsDashboard;
