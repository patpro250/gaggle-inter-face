import {
  LayoutDashboard,
  Book,
  RefreshCcw,
  Library,
  Users,
  BarChart3,
  Bookmark,
  PlusCircle,
  GraduationCap,
  CircleDollarSign, // Imported GraduationCap icon for Students
} from "lucide-react";
import React from "react";
import SidebarItem from "./SideBarItem";

export default function Sidebar() {
  return (
    <div className="w-64 max-md:hidden min-h-screen bg-white library-dark-bg shadow-lg p-5 flex flex-col overflow-auto">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        Mater Dei Nyanza
      </h2>
      <nav className="space-y-4">
        <SidebarItem
          href="/g/schools/dashboard"
          icon={<LayoutDashboard className="stroke-1" size={20} />}
          label="Dashboard"
        />
        <SidebarItem
          href="/g/schools/books"
          icon={<Book className="stroke-1" size={20} />}
          label="Books"
        />
        <SidebarItem
          href="/g/schools/circulations"
          icon={<RefreshCcw className="stroke-1" size={20} />}
          label="Circulations"
        />
        <SidebarItem
          href="/g/schools/students"
          icon={<GraduationCap className="stroke-1" size={20} />} // Changed to GraduationCap icon
          label="Students"
        />
        <SidebarItem
          href="/g/schools/members"
          icon={<Users className="stroke-1" size={20} />}
          label="Members"
        />
        <SidebarItem
          href="/g/schools/acquisitions"
          icon={<PlusCircle className="stroke-1" size={20} />}
          label="Acquisitions"
        />
        <SidebarItem
          href="/g/schools/inter-library"
          icon={<Library className="stroke-1" size={20} />}
          label="Inter Library"
        />
        <SidebarItem
          href="/g/schools/reservations"
          icon={<Bookmark className="stroke-1" size={20} />}
          label="Reservations"
        />
        <SidebarItem
          href="/g/schools/reports"
          icon={<BarChart3 className="stroke-1" size={20} />}
          label="Reports"
        />
      </nav>
    </div>
  );
}
