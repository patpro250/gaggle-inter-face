"use client";
import { Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import personalInfoSchema from "./personalInfoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { changeSettings, fetchSettings } from "./fetchSettings";
import toast from "react-hot-toast";

type PersonalInformation = z.infer<typeof personalInfoSchema>;

const onSubmit = async (data: PersonalInformation) => {
  const formattedData = {
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    dateOfBirth: new Date(data.dateOfBirth).toISOString(),
    address: {
      country: data.country,
      city: data.city,
    },
  };
  const response = await changeSettings(formattedData);
  if (response) toast.success(response);
};

const settings = await fetchSettings();

const PersonalInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<PersonalInformation>({
    resolver: zodResolver(personalInfoSchema),
    mode: "onChange",
  });

  if (!settings) return <h1>No user found</h1>;

  return (
    <div className="mt-4 max-w-4xl mx-auto p-6 bg-white rounded-lg ">
      <h1 className="font-bold text-2xl text-left text-primary mb-4">
        Personal Information
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* First Name */}
        <div>
          <label className="block text-gray-700">First Name</label>
          <input
            {...register("firstName")}
            type="text"
            name="firstName"
            defaultValue={settings.firstName}
            placeholder="Enter your first name"
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
            required
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-700">Last Name</label>
          <input
            {...register("lastName")}
            type="text"
            name="lastName"
            defaultValue={settings.lastName}
            placeholder="Enter your last name"
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
            required
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-gray-700">Date of Birth</label>
          <input
            {...register("dateOfBirth")}
            type="date"
            name="dateOfBirth"
            defaultValue={
              settings.dateOfBirth
            }
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
            required
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input
            {...register("phone")}
            type="tel"
            name="phone"
            defaultValue={settings.phone}
            placeholder="Enter your phone number"
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label className="block text-gray-700">City</label>
          <input
            {...register("city")}
            type="text"
            name="city"
            defaultValue={settings?.address?.city || ''}
            placeholder="Enter your city"
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
            required
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors?.city?.message}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block text-gray-700">Country</label>
          <input
            {...register("country")}
            type="text"
            name="country"
            defaultValue={settings?.address?.country || ''}
            placeholder="Enter your country"
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
            required
          />
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-left mt-4">
          <button
            type="submit"
            disabled={!isValid || !isDirty}
            className="bg-primary cursor-pointer text-white py-2 px-6 rounded-full flex items-center gap-2 shadow-md hover:bg-primary-dark transition duration-300"
          >
            <Save size={18} strokeWidth={1} />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
