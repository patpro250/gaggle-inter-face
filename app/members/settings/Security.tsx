"use client";
import { KeyRound, LogOut } from "lucide-react";
import { useState } from "react";
import { ChangePasswordModal } from "./ChangePasswordModal";

const Security = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="mt-4 max-w-4xl mx-auto p-6 bg-white rounded-lg ">
      <h1 className="font-bold text-2xl text-left text-primary mb-4">
        Password and Security
      </h1>
      <div className="flex max-sm:flex-col max-sm:gap-4 justify-between w-full">
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary cursor-pointer text-white py-2 px-6 rounded-full flex items-center gap-2 shadow-md hover:bg-primary-dark transition duration-300"
        >
          <KeyRound strokeWidth={1} width={17} />
          Change password
        </button>
        <button className="bg-primary cursor-pointer text-white py-2 px-6 rounded-full flex items-center gap-2 shadow-md hover:bg-primary-dark transition duration-300">
          Logout
          <LogOut strokeWidth={1} width={17} />
        </button>
        {showModal && (
          <ChangePasswordModal onClose={() => setShowModal(false)} />
        )}
      </div>
    </div>
  );
};

export default Security;
