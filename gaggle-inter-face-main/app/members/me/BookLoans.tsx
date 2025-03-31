import { Table } from "@radix-ui/themes";

const bookLoansData = [
  {
    title: "The Great Gatsby",
    code: "B001",
    author: "F. Scott Fitzgerald",
    publisher: "Scribner",
    overdueDays: 5,
  },
  {
    title: "1984",
    code: "B002",
    author: "George Orwell",
    publisher: "Secker & Warburg",
    overdueDays: 3,
  },
  {
    title: "To Kill a Mockingbird",
    code: "B003",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
    overdueDays: 0,
  },
];

const BookLoans = () => {
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
          {bookLoansData.map((book, index) => (
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
