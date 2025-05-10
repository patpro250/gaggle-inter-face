"use client";

import {
  MapPinHouse,
  PhoneForwarded,
  SlidersHorizontal,
  Watch,
} from "lucide-react";
import { Orbitron } from "next/font/google";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { z } from "zod";
import { useInstitutionContext } from "../../d/admin/stateManagement/institution";
import Stepper1 from "../stepper/page";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
});

const institutionSchema = z.object({
  address: z.string().min(1, "Address is required"),
  phone: z
    .string()
    .min(10, "Telephone number must be at least 10 digits")
    .max(15, "Too long for a phone number"),

  openingHours: z.string().min(1, "Opening hour is required"),
  type: z.string().min(1, "Type is required"),
});

const P2 = () => {
  const router = useRouter();
  const [isloadind, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    address: "",
    phone: "",
    openingHours: "",
    type: "",
  });

  const { DataForm, setData } = useInstitutionContext();

  const submitHander = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    if (!DataForm.name) {
      router.push("/pagnation-page/p1");
    }
    const address = formData.get("address") as string;
    const phone = formData.get("phone") as string;
    const openingHours = formData.get("openingHours") as string;
    const type = formData.get("type") as string;

    const data12 = {
      address,
      phone,
      openingHours,
      type,
    };

    const result = institutionSchema.safeParse(data12);

    if (!result.success) {
      const formattedErrors = result.error.format();

      setErrors({
        address: formattedErrors.address?._errors?.[0] ?? "",
        phone: formattedErrors.phone?._errors?.[0] ?? "",
        openingHours: formattedErrors.openingHours?._errors?.[0] ?? "",
        type: formattedErrors.type?._errors?.[0] ?? "",
      });

      setLoading(false);
    } else {
      // console.log("Validated data:", result.data);
      setData((prev) => ({
        ...prev,
        ...result.data,
      }));
      router.push("/pagnation-page/p3");
      console.log("hello pazzo");
      console.log(DataForm);
      setErrors({
        address: "",
        phone: "",
        openingHours: "",
        type: "",
      });

      setLoading(false);
    }
  };

  const nextHander = () => {};

  return (
    <div className="flex bg-indigo-50 py-10">
      <div className="flex-1/2 flex flex-col items-center">
        <div className="flex flex-col justify-center items-center p-2">
          <Stepper1 />
        </div>

        <form className="p-5 " onSubmit={submitHander}>
          <label className="text-base text-gray-600" htmlFor="address">
            Institution Address
          </label>
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
          <div className="relative bg-gray-50 mt-2 mb-3 rounded-md">
            <MapPinHouse
              className="absolute top-2 left-2"
              width={30}
              height={25}
            />
            <input
              id="address"
              className="font-normal w-full border-2 border-indigo-100 focus:border-indigo-400 focus:bg-indigo-100 rounded-md focus:ring-indigo-200 outline-0 p-2 ps-12"
              type="text"
              name="address"
              placeholder="Institution Address"
            />
          </div>

          <label className="text-base text-gray-600" htmlFor="phone">
            Institution Telephone Number
          </label>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
          <div className="relative bg-gray-50 mt-2 mb-3 rounded-md">
            <PhoneForwarded
              className="absolute top-2 left-2"
              width={30}
              height={25}
            />
            <input
              id="phone"
              className={`font-normal w-full ${
                errors.phone ? "border-red-300" : "border-indigo-100"
              } border-2 focus:border-indigo-400 focus:bg-indigo-100 rounded-md focus:ring-indigo-200 outline-0 p-2 ps-12`}
              type="tel"
              name="phone"
              placeholder="Telephone"
              required
            />
          </div>

          <label className="text-base text-gray-600" htmlFor="openingHours">
            Opening Hour
          </label>
          {errors.openingHours && (
            <p className="text-red-500 text-sm">{errors.openingHours}</p>
          )}
          <div className="relative bg-gray-50 mt-2 mb-3 rounded-md">
            <Watch className="absolute top-2 left-2" width={30} height={25} />
            <input
              id="openingHours"
              className="font-normal w-full border-2 border-indigo-100 focus:border-indigo-400 focus:bg-indigo-100 rounded-md focus:ring-indigo-200 outline-0 p-2 ps-12"
              type="text"
              name="openingHours"
              placeholder="ex: 09:00 AM 17:00 PM"
              required
            />
          </div>

          <label className="text-base text-gray-600" htmlFor="type">
            Institution Type
          </label>
          {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
          <div className="relative bg-gray-50 mt-2 mb-3 rounded-md">
            <SlidersHorizontal
              className="absolute top-2 left-2"
              width={30}
              height={25}
            />
            <select
              id="type"
              name="type"
              className="font-normal w-full py-3 border-2 border-indigo-100 focus:border-indigo-400 focus:bg-indigo-100 rounded-md focus:ring-indigo-200 outline-0 p-2 ps-12"
            >
              <option value="">Choose Institution Type</option>
              <option value="UNIVERSITY">University</option>
              <option value="COLLEGE">College</option>
              <option value="SCHOOL">School</option>
              <option value="PUBLIC_LIBRARY">Public Library</option>
              <option value="PRIVATE_LIBRARY">Private Library</option>
              <option value="NON_PROFIT">Non Profit</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          <button
            type="submit"
            onClick={nextHander}
            className="bg-sky-600 mt-6 hover:opacity-90 w-full h-10 rounded-md text-md font-normal text-white"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default P2;
