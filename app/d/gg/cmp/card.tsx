import React from "react";
// Import Lucide Icons
import {
  UsersRound,
  BookOpen,
  GraduationCap,
  Building2,
  DollarSign,
} from "lucide-react";

const statCards = [
  {
    id: 1,
    title: "Total Librarians",
    value: 4,
    icon: UsersRound,
    iconBg: "bg-green-600",
    iconColor: "text-green-300",
    cardBg: "bg-green-0",
  },
  {
    id: 2,
    title: "Total Books",
    value: 1240,
    icon: BookOpen,
    iconBg: "bg-blue-600",
    iconColor: "text-blue-300",
    cardBg: "bg-blue-50",
  },
  {
    id: 3,
    title: "Active Students",
    value: 320,
    icon: GraduationCap,
    iconBg: "bg-purple-600",
    iconColor: "text-purple-300",
    cardBg: "bg-purple-50",
  },
  {
    id: 4,
    title: "Institutions",
    value: 12,
    icon: Building2,
    iconBg: "bg-yellow-600",
    iconColor: "text-yellow-300",
    cardBg: "bg-yellow-50",
  },
  {
    id: 5,
    title: "Payments",
    value: "₹13,000",
    icon: DollarSign,
    iconBg: "bg-red-600",
    iconColor: "text-red-300",
    cardBg: "bg-red-50",
  },
];
const DataOverView = () => {
  return (
    <div className="grid grid-cols-3 gap-3 ">
      {statCards.map(({ id, title, value, icon: Icon, iconBg, iconColor }) => (
        <div
          key={id}
          className="bg-white dark:bg-gray-900 h-20 flex p-2 items-center gap-5 border border-gray-200 dark:border-gray-700 rounded-md"
        >
          <div className={`${iconBg} ${iconColor} p-4 rounded-full`}>
            <Icon />
          </div>
          <div>
            <h1 className="text-sm uppercase text-gray-600 dark:text-gray-300">
              {title}
            </h1>
            <p className="font-medium text-xl text-gray-900 dark:text-white">
              {value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataOverView;
