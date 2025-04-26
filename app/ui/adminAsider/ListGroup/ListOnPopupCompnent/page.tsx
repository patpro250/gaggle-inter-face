import { LucideProps } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
interface Props {
  Icon: FC<LucideProps>;
  href: string;
  path: string;
  title: string;
}
function ListPoup({ Icon, href, path, title }: Props) {
  return (
    <div>
      <li
        className={` ${
          href === path ? "bg-gray-300" : "bg-gray-0"
        } flex space-x-2 hover:bg-gray-200 font-normal px-3 py-2 rounded-md mt-2`}
      >
        <Icon /> <Link href={href}>{title}</Link>
      </li>
    </div>
  );
}

export default ListPoup;
