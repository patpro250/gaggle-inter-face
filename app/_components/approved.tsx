"use client";

import { Button } from "@radix-ui/themes";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import { getApiClient } from "../g/schools/axios";
import { useOnboardingStore } from "../stores/useOnboardingStore";
import { sentdataapp } from "./sever";
import { addApprovelib } from "../d/admin/Librarian/approvingLib";

const Roles = [
  "DIRECTOR",
  "MANAGER",
  "ASSISTANT",
  "CATALOGER",
  "REFERENCE_LIBRARIAN",
  "CIRCULATION_LIBRARIAN",
  "ARCHIVIST",
  "ACQUISITIONS_LIBRARIAN",
  "YOUTH_LIBRARIAN",
  "SCHOOL_LIBRARIAN",
  "PUBLIC_SERVICES_LIBRARIAN",
  "INTERLIBRARY_LOAN_LIBRARIAN",
  "SPECIAL_COLLECTIONS_LIBRARIAN",
  "EVENTS_COORDINATOR",
  "VOLUNTEER_COORDINATOR",
] as const;

interface FormData01 {
  id: string;
  role: string;
}

const roleSchema = z.object({
  role: z.enum(Roles, {
    required_error: "Please select a librarian role",
    invalid_type_error: "Invalid role selected",
  }),
});

const Approve = ({ id }: { id: string }) => {
  const [role, setRole] = useState("");
  const [ikosa, setIkosa] = useState("");

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form input
      const result = roleSchema.parse({ role });

      const payload = {
        id,
        role: result.role,
      };
      const response = await addApprovelib(id, result.role);
      if (response.success) {
        toast.success(`${response.message}`);
        return;
      } else {
        toast.error(`${response.message}`);
        return;
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.data[0]?.message || "approve error");
      setIkosa("Uzuza neza form yawe!!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
    setIkosa(""); // Clear error
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="max-w-60 flex flex-col gap-8">
        <div>
          <label
            htmlFor="role"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Assign Librarian Role
          </label>
          <select
            id="role"
            value={role}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Choose role</option>
            {Roles.map((roleOption) => (
              <option key={roleOption} value={roleOption}>
                {roleOption}
              </option>
            ))}
          </select>
          {ikosa && <p className="text-red-700 text-sm p-2">{ikosa}</p>}
        </div>

        <Button type="submit" variant="solid">
          Approve
        </Button>
      </form>
    </div>
  );
};

export default Approve;
