"use client";
import { Popover } from "@radix-ui/themes";

const ReservationBook = () => {
  return (
    <div>
      <li className="relative  ">
        <Popover.Root>
          <Popover.Trigger>
            {/* <div>
              <ListComponentOnly
                title={"Reservation "}
                href={"/admin/Reservation"}
                SubIcon={ChevronDown}
                Icon={BookmarkCheck}
                Path={Path}
              />
            </div> */}
          </Popover.Trigger>
          {/* <Popover.Content width="300px">
            <ul>
              <ListPoup
               
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
          </Popover.Content> */}
        </Popover.Root>
      </li>
    </div>
  );
};

export default ReservationBook;
