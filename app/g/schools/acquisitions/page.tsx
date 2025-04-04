import AcquireBooksButton from "./AcquireBooksButton";
import AcquisitionsOverview from "./AcquisitionsOverview";
import AcquisitionsTable from "./AcquisitionsTable";

const AcquisitionsPage = () => {
  return (
    <>
    <div className="flex justify-between mb-6 items-center">
      <h1 className="library-title">Acquisitions</h1>
      <AcquireBooksButton />
    </div>
      <AcquisitionsOverview />
      <AcquisitionsTable />
    </>
  );
};

export default AcquisitionsPage;
