"use client";

export default function Dashboard() {
  const stats = [
    { title: "Total Institutions", value: 142, trend: "up", change: "8%" },
    { title: "Active Institutions", value: 118, trend: "up", change: "12%" },
    { title: "Inactive Institutions", value: 24, trend: "down", change: "3%" },
    { title: "Payment Compliance", value: 83, trend: "up", change: "5%" },
  ];

  const recentSignups = [
    { name: "ABC University", date: "Jun 20, 2023", status: "active" },
    { name: "XYZ College", date: "Jun 18, 2023", status: "pending" },
    { name: "Global Institute", date: "Jun 15, 2023", status: "active" },
    { name: "Tech Academy", date: "Jun 12, 2023", status: "inactive" },
  ];

  const paymentStatus = [
    {
      label: "Paid Institutions",
      value: 118,
      percentage: 83,
      color: "bg-green-500",
    },
    {
      label: "Pending Payments",
      value: 15,
      percentage: 10,
      color: "bg-yellow-500",
    },
    { label: "Overdue Payments", value: 9, percentage: 7, color: "bg-red-500" },
  ];

  const notifications = [
    {
      type: "info",
      message: "System maintenance scheduled for June 25, 2:00 AM - 4:00 AM",
    },
    {
      type: "warning",
      message: "3 institutions have been inactive for over 60 days",
    },
    {
      type: "info",
      message: "New feature released: Bulk institution management",
    },
  ];

  const StatusBadge = ({ status }: { status: string }) => {
    const styles = {
      active:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      inactive: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      pending:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    };
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const TrendArrow = ({ trend }: { trend: string }) => {
    return trend === "up" ? (
      <span className="text-green-500">↑</span>
    ) : (
      <span className="text-red-500">↓</span>
    );
  };

  return (
    <div className="max-h-[500px] overflow-scroll bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-yellow-500">⚠️</span>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700 dark:text-yellow-200">
                5 institutions have pending payments that are due this week.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  {stat.title}
                </h3>
                <div className="mt-2 flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="ml-2 flex items-baseline text-sm font-semibold">
                    <TrendArrow trend={stat.trend} />
                    <span className="sr-only">
                      {stat.trend === "up" ? "Increased" : "Decreased"} by
                    </span>
                    {stat.change} from last month
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                Recent Signups
              </h2>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500"
              >
                See all
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Institution
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Signup Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  {recentSignups.map((signup, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {signup.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {signup.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        <StatusBadge status={signup.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        <button className="text-blue-600 hover:text-blue-900 dark:hover:text-blue-300">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  Payment Status
                </h2>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500"
                >
                  See all
                </a>
              </div>
              <div className="px-4 py-5 sm:p-6 space-y-4">
                {paymentStatus.map((payment, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      <span>{payment.label}</span>
                      <span>{payment.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${payment.color}`}
                        style={{ width: `${payment.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  Notifications
                </h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                  3 New
                </span>
              </div>
              <div className="px-4 py-5 sm:p-6 space-y-4">
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-md ${notification.type === "warning" ? "bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400" : "bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-400"}`}
                  >
                    <div className="flex">
                      <div className="flex-shrink-0">
                        {notification.type === "warning" ? (
                          <span className="text-yellow-500">⚠️</span>
                        ) : (
                          <span className="text-blue-500">ℹ️</span>
                        )}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-700 dark:text-gray-200">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
