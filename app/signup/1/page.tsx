"use client";

import SeccussLibrarian from "@/components/uix/seccussLibrarian";

export default function VerifyInstitution() {
  // Sample data - in a real app, this would come from your API

  return (
    <div className=" overflow-scroll">
      <div className="min-h-screen  flex flex-col justify-center items-center md:flex-row bg-gray-50">
        {/* Illustration Side */}
        {/* <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center p-12 text-white">
          <div className="max-w-md w-full">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Verification</h2>
              <h1 className="text-4xl font-extrabold">Confirm Your Details</h1>
            </div>

            <svg
              className="w-full h-auto max-h-64 object-contain"
              viewBox="0 0 500 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            
              <rect width="500" height="300" fill="url(#gradient)" />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>
              </defs>

            
              <path
                d="M150 120H350V240H150V120Z"
                fill="#F0F9FF"
                stroke="#93C5FD"
                strokeWidth="2"
              />
              <path d="M150 120H300L350 170V120" fill="#E0F2FE" />

             
              <path
                d="M180 180L210 210L270 150"
                stroke="#10B981"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M180 200L210 230L270 170"
                stroke="#10B981"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />

           
              <circle cx="100" cy="100" r="30" fill="#A5B4FC" />
              <circle cx="100" cy="90" r="15" fill="#E0E7FF" />
            </svg>

            <div className="mt-8">
              <p className="text-blue-100">
                Please verify that your information matches your institution
                records.
              </p>
            </div>
          </div>
        </div> */}
        <SeccussLibrarian />

        {/* Verification Form Side */}
        {/* <div className="md:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full bg-white p-10 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Verify Your Information
              </h1>
              <p className="text-gray-600">
                Institution Code:{" "}
                <span className="font-semibold">
                  {userData.institutionCode}
                </span>
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-sm font-medium text-gray-500">
                  Personal Information
                </h3>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">First Name</p>
                    <p className="font-medium">{userData.firstName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Last Name</p>
                    <p className="font-medium">{userData.lastName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="font-medium">
                      {userData.gender === "M" ? "Male" : "Female"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-sm font-medium text-gray-500">
                  Contact Information
                </h3>
                <div className="mt-2 space-y-2">
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{userData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{userData.phone}</p>
                  </div>
                </div>
              </div>

              <div className="pb-4">
                <h3 className="text-sm font-medium text-gray-500">
                  Account Security
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Password</p>
                  <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                    {userData.password
                      .split("")
                      .map(() => "•")
                      .join("")}
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center">
                <input
                  id="confirm-accuracy"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="confirm-accuracy"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I confirm that all information is accurate
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-medium ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } transition`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Verifying...
                  </>
                ) : (
                  "Complete Onboarding"
                )}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                Need to make changes?{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Contact support
                </a>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
