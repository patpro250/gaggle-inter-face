import { Table } from "@radix-ui/themes";

// Sample recent activities data
const recentActivitiesData = [
  {
    activityType: "Checked Out",
    bookTitle: "The Great Gatsby",
    date: "2025-03-01",
    status: "Completed",
  },
  {
    activityType: "Reserved",
    bookTitle: "1984",
    date: "2025-03-03",
    status: "Pending",
  },
  {
    activityType: "Returned",
    bookTitle: "To Kill a Mockingbird",
    date: "2025-03-05",
    status: "Completed",
  },
];

const RecentActivities = () => {
  return (
    <div className="mt-8">
      <h1 className="members-subtitle mb-4">Recent Activities</h1>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Activity Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Book Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {recentActivitiesData.map((activity, index) => (
            <Table.Row key={index}>
              <Table.Cell>{activity.activityType}</Table.Cell>
              <Table.Cell>{activity.bookTitle}</Table.Cell>
              <Table.Cell>{activity.date}</Table.Cell>
              <Table.Cell>{activity.status}</Table.Cell>
              <Table.Cell>
                <button>View Details</button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default RecentActivities;
