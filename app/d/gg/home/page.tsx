import React from "react";

const HomePage = () => {
  const institutions = [
    {
      id: 1,
      name: "Sunrise Public School",
      plan: "Premium",
      paymentStatus: "Paid",
      expiresOn: "2025-12-31",
    },
    {
      id: 2,
      name: "Green Hill Academy",
      plan: "Standard",
      paymentStatus: "Pending",
      expiresOn: "2025-07-15",
    },
  ];

  const stats = [
    { label: "Total Institutions", value: 32 },
    { label: "Paid Institutions", value: 24 },
    { label: "Pending Payments", value: 8 },
  ];

  const statusColors = {
    Paid: "bg-green-500",
    Pending: "bg-yellow-500",
    Overdue: "bg-red-500",
    "N/A": "bg-gray-400",
  };
  return (
    <div>
      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {stat.label}
            </p>
            <h3 className="text-2xl font-bold">{stat.value}</h3>
          </div>
        ))}
      </section>

      {/* Institutions Table */}
      <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
        <h2 className="text-xl font-bold mb-4">Overview of Institutions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Institution</th>
                <th className="px-4 py-2 text-left">Plan</th>
                <th className="px-4 py-2 text-left">Payment Status</th>
                <th className="px-4 py-2 text-left">Expires On</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {institutions.map((inst) => (
                <tr
                  key={inst.id}
                  className="border-b border-gray-300 dark:border-gray-700"
                >
                  <td className="px-4 py-2">{inst.name}</td>
                  <td className="px-4 py-2">{inst.plan}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-xs ${
                        statusColors[inst.paymentStatus]
                      }`}
                    >
                      {inst.paymentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2">{inst.expiresOn}</td>
                  <td className="px-4 py-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
