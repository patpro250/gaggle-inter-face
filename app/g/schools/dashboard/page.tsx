import Analytics from "./Analytics";
import DummyBarChart from "./DummyChart";
import Overview from "./Overview";

const SchoolsDashboard = () => {
  return (
    <>
      <h1 className="library-title">Overview</h1>
      <Overview />
      <DummyBarChart />
    </>
  );
};

export default SchoolsDashboard;
