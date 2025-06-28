"use client";

import { useForm } from "react-hook-form";
import { Building2, MapPin, Phone, Clock, Save } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { GetInstitution, PostInstitution } from "./getInsititution";
import toast from "react-hot-toast";
import React from "react";

type InstitutionSettings = {
  name: string;
  address: string;
  phone: string;
  openingHours: string;
};

interface Props {
  params: Promise<{ id: string }>;
}

export default function InstitutionSettingsPage({ params }: Props) {
  // Unwrap the params Promise as required by Next.js
  const { id } = React.use(params);

  // Fetch current institution data for default values
  const {
    data: defaultValues,
    isError,
    isLoading,
  } = useQuery<InstitutionSettings>({
    queryKey: ["institution", id],
    queryFn: () => GetInstitution(id),
  });

  // Initialize form with default values from API
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InstitutionSettings>({
    values: defaultValues,
  });

  // Mutation to update institution data
  const mutation = useMutation({
    mutationFn: PostInstitution,
    onSuccess: () => {
      toast.success("Institution settings updated successfully");
    },
    onError: () => {
      toast.error("Failed to update institution settings");
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching institution data.</p>;

  // Submit handler to trigger mutation
  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  // Styles for inputs
  const inputWrapper =
    "flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-transparent focus-within:ring-2 focus-within:ring-indigo-500";
  const inputStyle = "w-full ml-2 outline-none bg-transparent";

  return (
    <section className="w-full pt-20 pb-40 max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">
        Institution Settings
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <div className={inputWrapper}>
            <Building2 className="text-gray-500" size={20} />
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={inputStyle}
              placeholder="Institution name"
            />
          </div>
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <div className={inputWrapper}>
            <MapPin className="text-gray-500" size={20} />
            <input
              type="text"
              {...register("address", { required: "Address is required" })}
              className={inputStyle}
              placeholder="Institution address"
            />
          </div>
          {errors.address && (
            <p className="text-sm text-red-600 mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <div className={inputWrapper}>
            <Phone className="text-gray-500" size={20} />
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className={inputStyle}
              placeholder="Phone number"
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Opening Hours */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Opening Hours
          </label>
          <div className={inputWrapper}>
            <Clock className="text-gray-500" size={20} />
            <input
              type="text"
              {...register("openingHours", {
                required: "Opening hours are required",
              })}
              className={inputStyle}
              placeholder="e.g., 09:00 AM"
            />
          </div>
          {errors.openingHours && (
            <p className="text-sm text-red-600 mt-1">
              {errors.openingHours.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting || mutation.isPending}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            <Save size={18} />
            {isSubmitting || mutation.isPending ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </form>
    </section>
  );
}
