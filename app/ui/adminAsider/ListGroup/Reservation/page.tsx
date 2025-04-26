import { Popover } from "@radix-ui/themes";
import {
  ArrowRightLeft,
  BellPlus,
  BookmarkCheck,
  BookMinus,
  BookPlus,
  ChartCandlestick,
  ChevronDown,
  Cog,
  Diamond,
  DiamondPlus,
  ListFilterPlus,
  ListOrdered,
  ListTree,
  PackagePlus,
  Rss,
  Settings,
  UserRoundCog,
  Users,
} from "lucide-react";
import Link from "next/link";
import ListComponent from "../../listcompnent/page";
import ListComponentOnly from "../../listComponentOnlyButton/page";
import { useRouter, redirect } from "next/navigation";
import ListPoup from "../ListOnPopupCompnent/page";

interface Props {
  Path: string;
}
const ReservationBook = ({ Path }: Props) => {
  const router = useRouter();
  return (
    <div>
      <li className="relative  ">
        <Popover.Root>
          <Popover.Trigger>
            <div>
              <ListComponentOnly
                title={"Reservation "}
                href={"/admin/Reservation"}
                SubIcon={ChevronDown}
                Icon={BookmarkCheck}
                Path={Path}
              />
            </div>
          </Popover.Trigger>
          <Popover.Content width="300px">
            <ul>
              <ListPoup
                Icon={BookmarkCheck}
                href={"/admin/Reservation/Allowreservebooks"}
                path={Path}
                title={"Allow Reserve Books"}
              />

              <ListPoup
                Icon={ListOrdered}
                href={"/admin/Reservation/Viewreservation"}
                path={Path}
                title={"View Reservation"}
              />
            </ul>
          </Popover.Content>
        </Popover.Root>
      </li>
    </div>
  );
};

export default ReservationBook;
