import { Popover } from "@radix-ui/themes";
import { BellPlus, BookMinus, ChevronDown, Cog, ListTree } from "lucide-react";
import { useRouter } from "next/navigation";
import ListComponentOnly from "../../listComponentOnlyButton/page";
import ListPoup from "../ListOnPopupCompnent/page";

interface Props {
  Path: string;
}
const BorrowingManagement = ({ Path }: Props) => {
  const router = useRouter();
  return (
    <div>
      <li className="relative  ">
        <Popover.Root>
          <Popover.Trigger>
            <div>
              <ListComponentOnly
                title={"Borrowing "}
                href={"/admin/BorrowingManagement"}
                SubIcon={ChevronDown}
                Icon={ListTree}
                Path={Path}
              />
            </div>
          </Popover.Trigger>
          <Popover.Content width="300px">
            <ul>
              <ListPoup
                Icon={BookMinus}
                href={"/admin/BorrowingManagement/borrowedBook"}
                path={Path}
                title={"borrowed Book"}
              />

              <ListPoup
                Icon={Cog}
                href={"/admin/BorrowingManagement/RenewborrowedBook"}
                path={Path}
                title={"Re-new Borrowed Book"}
              />
              <ListPoup
                Icon={BellPlus}
                href={"/admin/BorrowingManagement/SendRemind"}
                path={Path}
                title={"Send Reminder notifications"}
              />
            </ul>
          </Popover.Content>
        </Popover.Root>
      </li>
    </div>
  );
};

export default BorrowingManagement;
