import { Table } from "@radix-ui/themes";
import { fetchBookLoans } from "./fetchBookLoans";

const BookLoans = async () => {
  const bookLoans = await fetchBookLoans();
  if (!bookLoans || bookLoans.length === 0)
    return <p className="text-3xl text-center mt-8">No book loans</p>;
  return (
    <div className="mt-8">
      <h1 className="members-subtitle mb-4">Recently borrowed</h1>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Code</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Author</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Publisher</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Overdue Days</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {bookLoans.map((book, index) => (
            <Table.Row key={index}>
              <Table.Cell>{book.title}</Table.Cell>
              <Table.Cell>{book.code}</Table.Cell>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>{book.publisher}</Table.Cell>
              <Table.Cell>{book.overdueDays}</Table.Cell>
              <Table.Cell>
                <button>Return</button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default BookLoans;
