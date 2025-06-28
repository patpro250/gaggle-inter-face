// app/institutions/page.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function InstitutionManagement() {
  const { register, handleSubmit } = useForm();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [planFilter, setPlanFilter] = useState("All");
  type Institution = {
    id: number;
    name: string;
    status: string;
    plan: string;
    signupDate: string;
    librarian: string;
    paymentStatus: string;
    address: string;
  };

  const [selectedInstitution, setSelectedInstitution] =
    useState<Institution | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const institutionsPerPage = 5;

  const institutions = [
    {
      id: 1,
      name: "ABC University",
      status: "Active",
      plan: "Premium",
      signupDate: "2023-05-15",
      librarian: "john.doe@abcu.edu",
      paymentStatus: "Paid",
      address: "123 College Ave, City, State",
    },
    // Add more mock institutions as needed
  ];

  const filteredInstitutions = institutions.filter((institution) => {
    return (
      (searchTerm === "" ||
        institution.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "All" || institution.status === statusFilter) &&
      (planFilter === "All" || institution.plan === planFilter)
    );
  });

  const paginatedInstitutions = filteredInstitutions.slice(
    (currentPage - 1) * institutionsPerPage,
    currentPage * institutionsPerPage
  );

  const totalPages = Math.ceil(
    filteredInstitutions.length / institutionsPerPage
  );

  const onSubmit = (data) => {
    console.log("Submitted Filters:", data);
  };

  const StatusBadge = ({ status }: { status: string }) => {
    const statusStyles = {
      Active:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Inactive:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      Suspended: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    };
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status as keyof typeof statusStyles]}`}
      >
        {status}
      </span>
    );
  };

  const PaymentBadge = ({ status }: { status: string }) => {
    const statusStyles = {
      Paid: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Pending:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      Overdue: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    };
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status as keyof typeof statusStyles]}`}
      >
        {status}
      </span>
    );
  };

  const handleAction = (action: string, institution) => {
    if (action === "view") {
      setSelectedInstitution(institution);
      setShowDetails(true);
    }
  };

  return (
    <div className="min-h-[500px] overflow-scroll p-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Institution Management</h1>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      >
        <input
          {...register("search")}
          type="text"
          placeholder="Search..."
          className="rounded-md p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          {...register("status")}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-md p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Suspended">Suspended</option>
        </select>
        <select
          {...register("plan")}
          value={planFilter}
          onChange={(e) => setPlanFilter(e.target.value)}
          className="rounded-md p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <option value="All">All Plans</option>
          <option value="Free">Free</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
        </select>
        {/* <button
          type="submit"
          className="col-span-1 md:col-span-3 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Apply Filters
        </button> */}
      </form>

      <div className="overflow-x-auto rounded-lg shadow bg-white dark:bg-gray-800">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium uppercase">
                Institution
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium uppercase">
                Status
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium uppercase">
                Plan
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium uppercase">
                Librarian
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium uppercase">
                Payment
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {paginatedInstitutions.map((institution) => (
              <tr key={institution.id}>
                <td className="px-4 py-2 text-sm">{institution.name}</td>
                <td className="px-4 py-2 text-sm">
                  <StatusBadge status={institution.status} />
                </td>
                <td className="px-4 py-2 text-sm">{institution.plan}</td>
                <td className="px-4 py-2 text-sm">{institution.librarian}</td>
                <td className="px-4 py-2 text-sm">
                  <PaymentBadge status={institution.paymentStatus} />
                </td>
                <td className="px-4 py-2 text-sm space-x-2">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleAction("view", institution)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {showDetails && selectedInstitution && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {selectedInstitution.name}
              </h2>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ✕
              </button>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Status:</span>{" "}
                {selectedInstitution.status}
              </p>
              <p>
                <span className="font-medium">Plan:</span>{" "}
                {selectedInstitution.plan}
              </p>
              <p>
                <span className="font-medium">Librarian:</span>{" "}
                {selectedInstitution.librarian}
              </p>
              <p>
                <span className="font-medium">Signup Date:</span>{" "}
                {selectedInstitution.signupDate}
              </p>
              <p>
                <span className="font-medium">Payment Status:</span>{" "}
                {selectedInstitution.paymentStatus}
              </p>
              <p>
                <span className="font-medium">Address:</span>{" "}
                {selectedInstitution.address}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
