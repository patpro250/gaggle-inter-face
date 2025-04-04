import ReservationsOverview from "./ReservationsOverview";
import ReservationsTable from "./ReservationsTable";

const ReservationsPage = () => {
  return (
    <>
      <h1 className="library-title">Reservations</h1>
      <ReservationsOverview />
      <ReservationsTable />
    </>
  );
};

export default ReservationsPage;
