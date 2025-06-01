"use client";

import { useModalStoreAdmin } from "@/app/stores/useModalAdmin";
import CreatePlanModal from "../page";

export default function Page() {
  const { openModal } = useModalStoreAdmin();

  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <button
          onClick={openModal}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Open Create Plan Modal
        </button>

        <CreatePlanModal />
      </div>
    </>
  );
}
