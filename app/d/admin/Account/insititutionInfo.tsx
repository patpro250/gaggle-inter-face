import { Session123 } from "@/app/Hooks/useSession";

const InstitutionInfo = async () => {
  const { address, name, code, createdAt } = await Session123();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 space-y-2">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            Institution Info
          </h3>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Code:</strong> {code}
          </p>
          <p>
            <strong>Joined at:</strong> {new Date(createdAt).toDateString()}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 space-y-2">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            Location Details
          </h3>
          <p>
            <strong>Address:</strong> {address}
          </p>
          <p>
            <strong>City:</strong> none
          </p>
          <p>
            <strong>ZIP:</strong> none
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstitutionInfo;
