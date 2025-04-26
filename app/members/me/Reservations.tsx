import { Table } from "@radix-ui/themes";
import { fetchReservations } from "./fetchReservations";

interface Reservation {
  reservationId: string;
  bookTitle: string;
  reservedFrom: string;
  reservationDate: string;
  dueDate: string | null;
  status: string;
}

const Reservations = async () => {
  const reservations: Reservation[] = await fetchReservations();
  if (!reservations || reservations.length === 0)
    return <p className="text-3xl text-center mt-8">No reservations</p>;
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
          {reservations.map((reservation, index) => (
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
