// app/ui/adminAsider/ListGroup/ListOnPopupCompnent/page.tsx
"use client";

import { Home, LucideProps } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface Item {
  Icon: FC<LucideProps>;
  href: string;
  title: string;
}

const items: Item[] = [
  { Icon: Home, href: "/", title: "Home" },
  /* … */
];

export default function Page() {
  return (
    <ul>
      {items.map(({ Icon, href, title }) => (
        <li
          key={href}
          className={`${
            href === "/" ? "bg-gray-300" : "bg-gray-0"
          } flex space-x-2 hover:bg-gray-200 px-3 py-2 rounded-md mt-2`}
        >
          <Icon />
          <Link href={href}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
