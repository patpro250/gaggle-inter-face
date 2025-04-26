import CirculationsActions from "./CirculationActions";
import CirculationsOverview from "./CirculationOverview";
import CirculationsTable from "./CirculationTable";
import ExportButton from "./Export";

export const metadata = {
  title: "Circulations",
  description: "Manage lending and return activities",
};

const CirculationPage = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="library-title">Circulations</h1>
        <CirculationsActions />
      </div>
      <CirculationsOverview />
      <div className="flex items-center justify-between">
        <h1 className="library-subtitle mt-6 mb-4">Recent circulations</h1>
        <ExportButton />
      </div>
      <CirculationsTable />
    </>
  );
};

export default CirculationPage;
