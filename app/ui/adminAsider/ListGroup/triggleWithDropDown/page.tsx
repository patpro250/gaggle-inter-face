import { Popover } from "@radix-ui/themes";
import {
  ChevronDown,
  PackagePlus,
  Rss,
  UserRoundCog,
  Users,
} from "lucide-react";
import Link from "next/link";
import ListComponent from "../../listcompnent/page";
import ListComponentOnly from "../../listComponentOnly/page";

interface Props {
  Path: string;
}
const TriggleDropDown1 = ({ Path }: Props) => {
  return (
    <div>
      <li className="relative  ">
        <Popover.Root>
          <Popover.Trigger>
            <div>
              <ListComponentOnly
                title={"Setting Ui"}
                href={""}
                SubIcon={ChevronDown}
                Icon={Users}
                Path={"90"}
              />
            </div>
          </Popover.Trigger>
          <Popover.Content width="300px">
            <ul>
              <li className=" flex space-x-2 hover:bg-gray-200 font-normal px-3 py-2 rounded-md mt-2">
                <UserRoundCog /> <Link href="/setting">Users Setting</Link>
              </li>
              <li className=" flex space-x-2 hover:bg-gray-200 font-normal px-3 py-2 rounded-md mt-2">
                <PackagePlus /> <Link href="/setting">Branch Manger</Link>
              </li>
              <li className=" flex space-x-2 hover:bg-gray-200 font-normal px-3 py-2 rounded-md mt-2">
                <Rss />
                <Link href="/setting">Inter Library</Link>
              </li>
            </ul>
          </Popover.Content>
        </Popover.Root>
      </li>
    </div>
  );
};

export default TriggleDropDown1;
