import { Popover } from "@radix-ui/themes";
import {
  ArrowRightLeft,
  BellPlus,
  BookmarkCheck,
  BookMinus,
  BookPlus,
  ChartCandlestick,
  ChevronDown,
  CircleUserRound,
  Clock9,
  Cog,
  Diamond,
  DiamondPlus,
  ListFilterPlus,
  ListOrdered,
  ListTree,
  PackagePlus,
  Paperclip,
  Rss,
  Settings,
  User,
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
const UserManagement = ({ Path }: Props) => {
  return (
    <div>
      <div className="relative  ">
        <Popover.Root>
          <Popover.Trigger>
            <div>
              <ListComponentOnly
                title={"User Management"}
                href={"/admin/UserManagement"}
                SubIcon={ChevronDown}
                Icon={User}
                Path={Path}
              />
            </div>
          </Popover.Trigger>
          <Popover.Content width="300px">
            <ul>
              <ListPoup
                Icon={CircleUserRound}
                href={"/admin/UserManagement/librarianAccounts"}
                path={Path}
                title={"librarian accounts"}
              />

              <ListPoup
                Icon={Paperclip}
                href={"/admin/UserManagement/rolesandpermissions"}
                path={Path}
                title={"roles and permissions"}
              />
              <ListPoup
                Icon={Clock9}
                href={"/admin/UserManagement/shift"}
                path={Path}
                title={"librarian shift time"}
              />
            </ul>
          </Popover.Content>
        </Popover.Root>
      </div>
    </div>
  );
};

export default UserManagement;
