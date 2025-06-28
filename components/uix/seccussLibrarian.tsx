import Link from "next/link";
import React from "react";

const SeccussLibrarian = () => {
  return (
    <div>
      <div className="mb-6 p-6 bg-white border border-green-100 rounded-xl shadow-sm">
        <div className="flex flex-col items-center text-center">
          {/* Animated checkmark */}
          <div className="relative mb-5">
            <svg
              className="w-16 h-16 text-green-500 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div className="absolute inset-0 rounded-full bg-green-100 opacity-0 animate-ping" />
          </div>

          {/* Success message with fade-in animation */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Librarian Account Created
            </h3>
            <p className="text-gray-600 mb-4">
              The new librarian account has been successfully created and is
              pending admin approval.
            </p>

            {/* Animated illustration */}
            <div className="mb-6 w-40 mx-auto">
              <svg
                viewBox="0 0 200 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-float"
              >
                <path
                  d="M40 80H160V100H40V80Z"
                  fill="#E5E7EB"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                />
                <path d="M40 80H160L140 60H60L40 80Z" fill="#F3F4F6" />
                <path
                  d="M60 60H140V80H60V60Z"
                  fill="#F9FAFB"
                  stroke="#D1D5DB"
                  strokeWidth="2"
                />
                <circle cx="100" cy="40" r="20" fill="#3B82F6" />
                <path
                  d="M90 45L105 55L110 40"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M80 100V110H120V100"
                  stroke="#6B7280"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              The librarian will receive an email notification once their
              account is approved by the administrator.
            </p>
          </div>

          {/* Buttons with smooth transition */}
          <div className="flex space-x-3">
            <Link href={"/"}>
              <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors duration-200">
                success
              </button>
            </Link>
            {/* <button
                    // onClick={() => router.push('/dashboard')}
                    className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Return to Dashboard
                  </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeccussLibrarian;
