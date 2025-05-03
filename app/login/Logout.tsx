"use client";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut({ redirect: false });  // Prevent automatic redirect after logout
    // Optionally, you can redirect manually after logout if needed
    window.location.href = "/";  // Redirect to home page or login page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button
        onClick={handleLogout}
        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
