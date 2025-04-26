"use client";
import { useState, useEffect } from "react";
import * as Switch from "@radix-ui/react-switch";
import * as Label from "@radix-ui/react-label";
import { Save, Settings, Wrench } from "lucide-react";
import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
import useFetchData from "../stateManagement/SettingGetting";
import Loading from "../loading";
import { ErrorBoundaryHandler } from "next/dist/client/components/error-boundary";
import ErrorBox from "../../component/ERR0R/page";
import { boolean } from "zod";

function SettingsPage() {
  const url =
    "http://localhost:4000/Institutions/20298458-d067-40c6-ac8a-9b3af4e0a718/settings";
  const { data, loading, error } = useFetchData(url);

  const [text] = useTypewriter({
    words: [
      "Update your account details",
      "Configure notifications",
      "Search and Discovery",
      "Change security settings",
      "Manage integrations",
    ],
    loop: Infinity, // Makes the typewriter effect loop indefinitely
  });
  let maxpL = 0;
  let maxR = 0;
  let FeePeriod = 0;
  let OverDue = 0;
  let remindDay = 0;
  let BorrwedLimit = 0;
  let reserved12 = null;
  if (data) {
    maxpL = data.circulation.maxLoanPeriod;
    maxR = data.circulation.maxRenewals;
    FeePeriod = data.circulation.lateFeePerDay;
    OverDue = data.circulation.overdueGracePeriod;
    remindDay = data.notification.reminderDaysBeforeDue;
    BorrwedLimit = data.userPermissions.borrowerLimit;
    reserved12 = data.userPermissions.canReserveBooks;
  } else {
    return <Loading />;
  }
  return (
    <div className=" bg-amber-0 mb-20">
      {loading && <Loading />}
      {error && <ErrorBox error={"Server Error Wait For Gaggle Team "} />}
      {data?.[0]?.acquisitions?.purchaseRequestsAllowed}
      {/* burner */}
      <div className=" relative min-h-60 mb-20 bg-gradient-to-br from-[#77afc3] via-[#2dccf9]/50 to-[#2dccf9]/90 overflow-hidden border-1 border-gray-200 rounded-md">
        <div className=" absolute z-10 bg-amber-0 h-full w-full xl:w-[50%] flex flex-col gap-5 justify-center ps-10 ">
          <h1 className="text-4xl font-medium text-gray-700 mb-2 ">
            Manage and customize your experience
          </h1>
          <h1 className="text-xl font-medium text-gray-700 mb-2 ">
            What You Can Do :{" "}
            <span className="text-md font-light text-indigo-600 mb-2 ">
              {text}
            </span>
          </h1>
        </div>

        <Image
          className="mt-6 absolute right-0 "
          src="/s-b.png"
          width={300}
          height={200}
          alt={""}
        />
      </div>
      {/* general setting */}
      <div className="flex flex-col bg-amber-0 p-2  pb-10 mb-10 border-b-1 border-gray-200 ">
        <h1 className="flex gap-2 border-b-1 border-gray-200 pb-5 mb-5 pt-2 text-gray-700 font-medium text-xl ">
          <Settings />
          General Setting
        </h1>
        <form className="flex flex-col" action="" method="post">
          <label
            className="text-sm text-gray-600 mb-3 mt-3 font-light"
            htmlFor=""
          >
            Institution Name
          </label>
          <input
            className="p-2 border-1 text-gray-700 border-gray-200 outline-0 focus:ring-4 focus:ring-indigo-100 rounded-md "
            type="text"
            placeholder="Institution Name"
          />

          <label
            className="text-sm text-gray-600 mb-3 mt-3 font-light"
            htmlFor=""
          >
            Email
          </label>
          <input
            disabled
            className="p-2 border-1 text-gray-700 border-gray-200 outline-0 focus:ring-4 focus:ring-indigo-100 rounded-md "
            type="text"
            value={"Materdei@gmail.com"}
            placeholder="Email"
          />

          <label
            className="text-sm text-gray-600 mb-3 mt-3 font-light"
            htmlFor=""
          >
            Phone
          </label>
          <input
            disabled
            className="p-2 border-1 text-gray-700 border-gray-200 outline-0 focus:ring-4 focus:ring-indigo-100 rounded-md "
            type="text"
            value={"+250 784523973"}
            placeholder="Phone"
          />
          <label
            className="text-sm text-gray-600 mb-3 mt-3 font-light"
            htmlFor=""
          >
            Address
          </label>
          <input
            className="p-2 border-1 text-gray-700 border-gray-200 outline-0 focus:ring-4 focus:ring-indigo-100 rounded-md "
            type="text"
            placeholder="Address"
          />

          <label
            className="text-sm text-gray-600 mb-3 mt-3 font-light"
            htmlFor=""
          >
            Established Year
          </label>
          <input
            className="p-2 border-1 text-gray-700 border-gray-200 outline-0 focus:ring-4 focus:ring-indigo-100 rounded-md "
            type="text"
            placeholder="Established Year"
          />

          <button className=" flex gap-3 justify-center items-center h-9 max-w-25 hover:opacity-85 bg-indigo-600 mt-5 text-white text-md rounded-md ">
            <Save size={16} /> save
          </button>
        </form>
      </div>
      {/* personal setting */}

      <div className="flex flex-col bg-amber-0 p-2  pb-10 mb-10 border-b-1 border-gray-200 ">
        <h1 className="flex gap-2 border-b-1 border-gray-200 pb-5 mb-5 pt-2 text-gray-700 font-medium text-xl ">
          <Wrench />
          Personal Setting
        </h1>
        <form className="flex flex-col" action="" method="post">
          {/* section 1 */}
          <section className=" flex flex-col">
            <h2 className=" pb-5 mb-5 pt-2 text-gray-700 font-medium text-xl">
              Calculation setting
            </h2>
            <label
              className="text-sm text-gray-600 mb-3 mt-3 font-light"
              htmlFor=""
            >
              Maximum Loarn Period :{" "}
              <span className="rounded-sm font-extrabold bg-indigo-500 px-1 text-white  ">
                {maxpL}
              </span>
            </label>
            <input
              className="p-2 border-1 text-gray-700 border-gray-200 outline-0 focus:ring-4 focus:ring-indigo-100 rounded-md "
              type="number"
              placeholder="Maximum Loarn Period"
            />

            <label
              className="text-sm text-gray-600 mb-3 mt-3 font-light"
              htmlFor=""
            >
              Maximum renewals :{" "}
              <span className="rounded-sm font-extrabold bg-indigo-600 px-1 text-white  ">
                {maxR}
              </span>
            </label>
            <input
              className="p-2 border-1 text-gray-700 border-gray-200 outline-0 focus:ring-4 focus:ring-indigo-100 rounded-md "
              type="number"
              placeholder="Maximum Loarn Period"
            />

            <label
              className="text-sm text-gray-600 mb-3 mt-3 font-light"
              htmlFor=""
            >
              Late fee Period :{" "}
              <span className="rounded-sm font-extrabold bg-indigo-600 px-1 text-white  ">
                {FeePeriod}
              </span>
            </label>
            <input
              className="p-2 border-1 text-gray-700 border-gray-200 outline-0 focus:ring-4 focus:ring-indigo-100 rounded-md "
              type="number"
              placeholder=" Late fee Period"
            />
            <label
              className="text-sm text-gray-600 mb-3 mt-3 font-light"
              htmlFor=""
            >
              reserved Book :{" "}
              <span className="rounded-sm font-extrabold bg-indigo-600 px-1 text-white  ">
                {reserved12}
              </span>
            </label>
            <input
              className="p-2 border-1 text-gray-700 border-gray-200 outline-0 focus:ring-4 focus:ring-indigo-100 rounded-md "
              type="text"
              placeholder="reserved Book"
            />

            <label
              className="text-sm text-gray-600 mb-3 mt-3 font-light"
              htmlFor=""
            >
              Over Due Grace Periods :{" "}
              <span className="rounded-sm font-extrabold bg-indigo-600 px-1 text-white  ">
                {OverDue}
              </span>
            </label>
            <input
              className="p-2 border-1 text-gray-700 border-gray-200 outline-0 focus:ring-4 focus:ring-indigo-100 rounded-md "
              type="number"
              placeholder="Over Due Grace Periods"
            />
          </section>
          {/* end section 1 */}

          {/* section 2 */}
          <section className=" flex flex-col">
            <h2 className=" pb-5 mb-5 mt-5 pt-2 text-gray-700 font-medium text-xl">
              Notification
            </h2>
            <label
              className="text-sm text-gray-600 mb-3 mt-3 font-light"
              htmlFor=""
            >
              reminder Days Before Due :{" "}
              <span className="rounded-sm font-extrabold bg-indigo-600 px-1 text-white  ">
                {remindDay}
              </span>
            </label>
            <input
              className="p-2 border-1 text-gray-700 border-gray-200 outline-0 focus:ring-4 focus:ring-indigo-100 rounded-md "
              type="number"
              placeholder="reminder Days Before Due"
            />
          </section>
          {/* end section 2 */}

          {/* section 3 */}
          <section className=" flex flex-col">
            <h2 className=" pb-5  mt-5 mb-5 pt-2 text-gray-700 font-medium text-xl">
              User Permission
            </h2>
            <label
              className="text-sm text-gray-600 mb-3 mt-3 font-light"
              htmlFor=""
            >
              Borrower Limit :{" "}
              <span className="rounded-sm font-extrabold bg-indigo-600 px-1 text-white  ">
                {BorrwedLimit}
              </span>
            </label>
            <input
              className="p-2 border-1 text-gray-700 border-gray-200 outline-0 focus:ring-4 focus:ring-indigo-100 rounded-md "
              type="number"
              placeholder="Borrower Limit"
            />
          </section>
          {/* end section 3 */}

          <button className=" flex gap-3 justify-center items-center h-9 max-w-25 hover:opacity-85 bg-indigo-600 mt-5 text-white text-md rounded-md ">
            <Save size={16} /> save
          </button>
        </form>
      </div>
    </div>
  );
}

export default SettingsPage;
