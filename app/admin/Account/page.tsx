import React from "react";
import Image from "next/image";
import { Button, Switch } from "@radix-ui/themes";
import { Badge, Cog, EyeIcon, Trash2, Wrench } from "lucide-react";
import { on } from "events";

const activityLogs = [
  {
    id: 1,
    status: "Unread",
    heading: "New Task Assigned",
    message: "Manager John assigned 'Book Inventory Check' to you.",
  },
  {
    id: 2,
    status: "Unread",
    heading: "Task Completed",
    message: "Sarah marked 'Library Maintenance' as completed.",
  },
  {
    id: 3,
    status: "Read",
    heading: "New Member Added",
    message: "Manager Alex approved 3 new library members.",
  },
  {
    id: 4,
    status: "Unread",
    heading: "Policy Updated",
    message: "Mike updated the 'Late Return Policy'.",
  },
  {
    id: 5,
    status: "Read",
    heading: "System Alert",
    message: "Scheduled system maintenance at 10 PM tonight.",
  },
  {
    id: 6,
    status: "Unread",
    heading: "Task Review Required",
    message: "Director requested feedback on 'Digital Archive Setup'.",
  },
  {
    id: 7,
    status: "Read",
    heading: "Book Request Approved",
    message: "Your request for 'JavaScript Deep Dive' has been approved.",
  },
  {
    id: 8,
    status: "Unread",
    heading: "Overdue Books Alert",
    message: "3 books are overdue for return. Please check your list.",
  },
  {
    id: 9,
    status: "Read",
    heading: "New Announcement",
    message: "Library will be closed this Friday for maintenance.",
  },
  {
    id: 10,
    status: "Unread",
    heading: "Profile Update Needed",
    message: "Your profile information needs to be updated.",
  },
];
const MyAccount = () => {
  return (
    <div className="  bg-amber-0 pb-20 ">
      <div className="min-h-50 bg-indigo-0 border-b-1 border-gray-200 p-10 flex justify-center items-center  ">
        <div className=" flex flex-col gap-5">
          <div className="flex gap-10 flex-col md:flex-row justify-items-center md:justify-center items-center">
            <div className="bg-green-0 shadow-0 flex items-center justify-center rounded-full overflow-hidden">
              <Image
                height={100}
                width={100}
                src="/image.svg"
                alt={"User Image"}
              ></Image>
            </div>
            <div className=" text-center md:text-left ">
              <h1 className="text-3xl font-medium text-gray-700">
                Iraguha Patrick
              </h1>
              <h1 className="text-md font-normal text-gray-600 mt-1">
                Iraguha@gmail.com
              </h1>
              <h1 className="text-md font-normal text-gray-600 mt-1">
                +250 786684954
              </h1>
              <p className="text-md font-normal text-gray-600 mt-1 ">
                Director
              </p>
            </div>
          </div>

          <div>
            <button className="border-1 border-gray-200 px-3 py-2 ms-[60px] md:ms-35 rounded-md text-sm text-gray-700">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* body */}

      <div className="p-2 m-4 grid grid-cols-1 md:grid-cols-6 gap-2   min-h-60 bg-gray-0">
        <div className="grid col-span-auto md:col-span-4 bg-amber-0 border-1 border-gray-200 p-3 ">
          <h1 className="text-base pb-2 border-b-1 border-gray-200 text-gray-700 font-medium flex items-center gap-2">
            <Wrench size={20} />
            Activity log
            <Switch value={1} />
          </h1>
          <div className="bg-red-0 h-62 pb-2 px-2 pt-2 overflow-y-auto  ">
            {/* box data */}

            {activityLogs.map((data) => (
              <div className="bg-amber-0 rounded-md mt-2 mb-2 p-2 border-1 border-gray-200 bg-amber-0 ">
                <div className="flex justify-end">
                  <Badge color={data.status == "Unread" ? "red" : "green"}>
                    {data.status}
                  </Badge>
                </div>
                <h1 className="text-md font-medium text-gray-700 mb-1 ">
                  {data.heading}
                </h1>
                <p className="text-sm text-gray-600 tracking-wide font-light ">
                  {data.message}
                </p>
                <div className="bg-amber-0 flex justify-end gap-2 text-gray-600">
                  <EyeIcon size={14} />
                  <div className="text-red-500">
                    <Trash2 size={14} />
                  </div>
                </div>
              </div>
            ))}

            {/* end box data */}
          </div>
        </div>
        <div className="bg-green-0 border-1 border-gray-200  col-span-auto md:col-span-2  ">
          <div className="p-4">
            <h1 className="text-base pb-2 border-b-1 border-gray-200 text-gray-700 font-medium flex items-center gap-2">
              <Cog size={20} />
              History
            </h1>
            <div className="bg-green-0 h-60 p-2 overflow-y-auto">
              <div className="bg-amber-0 rounded-md mt-2 mb-2 p-2 border-1 border-gray-200 bg-amber-0 ">
                <h1 className="text-md font-medium text-gray-700 mb-1 ">
                  heding
                </h1>
                <p className="text-sm text-gray-600 tracking-wide font-light ">
                  message
                </p>
                <div className="bg-amber-0 flex justify-end gap-2 text-gray-600">
                  <EyeIcon size={14} />
                  <div className="text-red-500">
                    <Trash2 size={14} />
                  </div>
                </div>
              </div>

              <div className="bg-amber-0 rounded-md mt-2 mb-2 p-2 border-1 border-gray-200 bg-amber-0 ">
                <h1 className="text-md font-medium text-gray-700 mb-1 ">
                  heding
                </h1>
                <p className="text-sm text-gray-600 tracking-wide font-light ">
                  message
                </p>
                <div className="bg-amber-0 flex justify-end gap-2 text-gray-600">
                  <EyeIcon size={14} />
                  <div className="text-red-500">
                    <Trash2 size={14} />
                  </div>
                </div>
              </div>

              <div className="bg-amber-0 rounded-md mt-2 mb-2 p-2 border-1 border-gray-200 bg-amber-0 ">
                <h1 className="text-md font-medium text-gray-700 mb-1 ">
                  heding
                </h1>
                <p className="text-sm text-gray-600 tracking-wide font-light ">
                  message
                </p>
                <div className="bg-amber-0 flex justify-end gap-2 text-gray-600">
                  <EyeIcon size={14} />
                  <div className="text-red-500">
                    <Trash2 size={14} />
                  </div>
                </div>
              </div>

              <div className="bg-amber-0 rounded-md mt-2 mb-2 p-2 border-1 border-gray-200 bg-amber-0 ">
                <h1 className="text-md font-medium text-gray-700 mb-1 ">
                  heding
                </h1>
                <p className="text-sm text-gray-600 tracking-wide font-light ">
                  message
                </p>
                <div className="bg-amber-0 flex justify-end gap-2 text-gray-600">
                  <EyeIcon size={14} />
                  <div className="text-red-500">
                    <Trash2 size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
