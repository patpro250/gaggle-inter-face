import { Popover } from "@radix-ui/themes";
import {
  ArrowRightLeft,
  BookPlus,
  ChartCandlestick,
  ChevronDown,
  ListFilterPlus,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ListComponentOnly from "../../listComponentOnlyButton/page";

interface Props {
  Path: string;
}
const BookInventory = ({ Path }: Props) => {
  const router = useRouter();
  return (
    <div>
      <li className="relative  ">
        <Popover.Root>
          <Popover.Trigger>
            <div>
              <ListComponentOnly
                title={"Book Inventory"}
                href={"/admin/BookInvetory"}
                SubIcon={ChevronDown}
                Icon={ChartCandlestick}
                Path={Path}
              />
            </div>
          </Popover.Trigger>
          <Popover.Content width="300px">
            <ul>
              <li className=" flex space-x-2 hover:bg-gray-200 font-normal px-3 py-2 rounded-md mt-2">
                <BookPlus />{" "}
                <Link href="/admin/BookInvetory/AddNewBook">Add New Book</Link>
              </li>
              <li className=" flex space-x-2 hover:bg-gray-200 font-normal px-3 py-2 rounded-md mt-2">
                <ListFilterPlus />{" "}
                <Link href="/admin/BookInvetory/Search">
                  View,Search &Filter
                </Link>
              </li>
              <li className=" flex space-x-2 hover:bg-gray-200 font-normal px-3 py-2 rounded-md mt-2">
                <Settings />
                <Link href="/admin/BookInvetory/ModifyBook">
                  Edit & delet Book Detail
                </Link>
              </li>
              <li className=" flex space-x-2 hover:bg-gray-200 font-normal px-3 py-2 rounded-md mt-2">
                <ArrowRightLeft />
                <Link href="/admin/BookInvetory/TrackingBook">
                  Track Check-in /Check-out{" "}
                </Link>
              </li>
            </ul>
          </Popover.Content>
        </Popover.Root>
      </li>
    </div>
  );
};

export default BookInventory;
