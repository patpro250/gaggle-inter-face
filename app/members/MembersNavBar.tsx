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
    <nav className="flex">
      <ul className="flex max-md:hidden items-center w-full justify-between">
        {navLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <li key={link.href} className="hover:text-primary hover:transition">
              <Link
                href={link.href}
                className={classNames({
                  "text-primary font-bold": currentPath === link.href,
                  "text-xl flex items-center": true,
                })}
              >
                {Icon && <Icon className="mr-2" size={20} />}
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export const MobileNav = () => {
  const currentPath = usePathname();

  return (
    <footer className="block md:hidden fixed bottom-0 w-full bg-white shadow-lg">
      <nav className="flex justify-between items-center p-4">
        {navLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <Link
              key={link.href}
              href={link.href}
              className={classNames("flex flex-col items-center text-sm", {
                "text-primary font-bold": currentPath === link.href,
              })}
            >
              {Icon && <Icon className="mb-1" size={24} />}
              {link.label}
            </Link>
          );
        })}
      </nav>
    </footer>
  );
};
