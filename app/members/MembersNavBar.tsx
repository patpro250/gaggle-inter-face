"use client";
import classNames from "classnames";
import {
  CircleUserRound,
  NotebookTabs,
  Settings,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileAvatar from "./ProfileAvatar";

const iconMap = {
  NotebookTabs: NotebookTabs,
  TrendingUp: TrendingUp,
  CircleUserRound: CircleUserRound,
  Settings: Settings,
};

const navLinks = [
  { label: "Books", href: "/members", icon: "NotebookTabs" },
  { label: "Trending", href: "/members/trending", icon: "TrendingUp" },
  { label: "My Activity", href: "/members/me", icon: "CircleUserRound" },
  { label: "Settings", href: "/members/settings", icon: "Settings" },
];

export const DesktopNav = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex items-center mt-8 mb-8 justify-between w-full px-4">
      <ul className="flex gap-10 items-center mx-auto">
        {navLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <li key={link.href} className="group hover:text-primary">
              <Link
                href={link.href}
                className={classNames(
                  "text-xl flex items-center transition-all duration-200",
                  {
                    "text-primary font-bold": currentPath === link.href,
                    "text-gray-700": currentPath !== link.href,
                  }
                )}
              >
                {Icon && (
                  <Icon
                    className="mr-2 transition-all duration-200 group-hover:text-primary"
                    size={20}
                  />
                )}
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Profile Avatar on the Right */}
      <ProfileAvatar />
    </nav>
  );
};

export const MobileNav = () => {
  const currentPath = usePathname();

  return (
    <footer className="block md:hidden fixed bottom-0 w-full bg-white shadow-lg z-50">
      <nav className="flex justify-around items-center p-4 bg-white border-t-2 border-gray-200">
        {navLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <Link
              key={link.href}
              href={link.href}
              className={classNames(
                "flex flex-col items-center gap-1 text-sm xs:text-xs transition-all duration-200",
                {
                  "text-primary font-bold": currentPath === link.href,
                  "text-gray-600": currentPath !== link.href,
                }
              )}
            >
              {Icon && (
                <Icon className="mb-1 transition-all duration-200 group-hover:text-primary" />
              )}
              {link.label}
            </Link>
          );
        })}
      </nav>
    </footer>
  );
};
