import { Book, Bookmark, Clock } from "lucide-react";
import { fetchMemberStats } from "./fetchStats";

const MemberOverview = async () => {
  const stats = await fetchMemberStats();
  return (
    <>
      <h1 className="mt-8 text-2xl text-black mb-4 font-semibold">My Stats</h1>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Borrowed Books */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
          <div className="text-4xl flex items-center gap-4 font-semibold text-primary mb-2">
            <Book />
            {stats.borrowed}
          </div>
          <div className="text-gray-600 capitalize">Books Borrowed</div>
        </div>

        {/* Overdue Books */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
          <div className="text-4xl flex items-center gap-4 font-semibold text-primary mb-2">
            <Clock />
            {stats.overDue}
          </div>
          <div className="text-gray-600 capitalize">Overdue Books</div>
        </div>

        {/* Active Reservations */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
          <div className="text-4xl flex items-center gap-4 font-semibold text-primary mb-2">
            <Bookmark />
            {stats.activeReservations}
          </div>
          <div className="text-gray-600 capitalize">Active Reservations</div>
        </div>

        {/* Fines */}
        {/* <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
          <div className="text-4xl flex items-center gap-4 font-semibold text-primary mb-2">
            <DollarSign />
            {stats.inFines}
          </div>
          <div className="text-gray-600 capitalize">In Fines</div>
        </div> */}
      </div>
    </>
  );
};

export default MemberOverview;
