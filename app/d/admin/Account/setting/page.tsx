"use client";
import { useForm } from "react-hook-form";
import { Building2, MapPin, Phone, Clock, Save } from "lucide-react";

type InstitutionSettings = {
  name: string;
  address: string;
  phone: string;
  openingHours: string;
};

const defaultValues: InstitutionSettings = {
  name: "G.S Mater Dei Nyanza",
  address: "Nyanza",
  phone: "07834500000",
  openingHours: "09:00 AM",
};

export default function InstitutionSettingsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InstitutionSettings>({ defaultValues });

  const onSubmit = (data: InstitutionSettings) => {
    alert(data);
    // Call API here
  };

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
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            <Save size={18} />
            {isSubmitting ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </form>
    </section>
  );
}
