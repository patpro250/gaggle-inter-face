import { Table } from "@radix-ui/themes";

// Sample reservation data with library names for the reservation
const reservationsData = [
  {
    reservationId: "R001",
    bookTitle: "The Great Gatsby",
    reservedFrom: "Central Library",
    reservationDate: "2025-03-01",
    dueDate: "2025-03-15",
    status: "Pending",
  },
  {
    reservationId: "R002",
    bookTitle: "1984",
    reservedFrom: "Eastside Branch",
    reservationDate: "2025-03-03",
    dueDate: "2025-03-17",
    status: "Confirmed",
  },
  {
    reservationId: "R003",
    bookTitle: "To Kill a Mockingbird",
    reservedFrom: "Westside Branch",
    reservationDate: "2025-03-05",
    dueDate: "2025-03-19",
    status: "Canceled",
  },
];

const Reservations = () => {
  return (
    <div className="mt-8">
      <h1 className="members-subtitle mb-4">My reservations</h1>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Reservation ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Book Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>
              Reserved From (Library)
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Reservation Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Due Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {reservationsData.map((reservation, index) => (
            <Table.Row key={index}>
              <Table.Cell>{reservation.reservationId}</Table.Cell>
              <Table.Cell>{reservation.bookTitle}</Table.Cell>
              <Table.Cell>{reservation.reservedFrom}</Table.Cell>
              <Table.Cell>{reservation.reservationDate}</Table.Cell>
              <Table.Cell>{reservation.dueDate}</Table.Cell>
              <Table.Cell>{reservation.status}</Table.Cell>
              <Table.Cell>
                {/* Add action buttons or links for each reservation */}
                <button>Cancel</button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default Reservations;
