"use client";

import { Popover } from "@radix-ui/themes";

export default function ClientBorrowingManagement() {
  return (
    <li className="relative">
      <Popover.Root>
        {/* <Popover.Trigger>
          <ListComponentOnly
            title="Borrowing"
            href="/admin/BorrowingManagement"
            SubIcon={ChevronDown}
            Icon={ListTree}
          />
        </Popover.Trigger> */}
        {/* <Popover.Content width="300px">
          <ul>
            <ListPoup
              href="/admin/BorrowingManagement/borrowedBook"
              title="Borrowed Book"
            />
            <ListPoup title="Renew Borrowed Book" />
            <ListPoup
              Icon={BellPlus}
              href="/admin/BorrowingManagement/SendRemind"
              title="Send Reminder Notifications"
            />
          </ul>
        </Popover.Content> */}
      </Popover.Root>
    </li>
  );
}
