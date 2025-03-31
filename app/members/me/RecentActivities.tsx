import { Table } from "@radix-ui/themes";
import { fetchRecentActivities } from "./fetchRecentActivities";

interface RecentActivity {
  activityType: string;
  bookTitle: string;
  date: string;
  status: string;
}

const RecentActivities = async () => {
  const recentActivities: RecentActivity[] = await fetchRecentActivities();
  if (!recentActivities || recentActivities.length === 0)
    return <p className="text-3xl text-center mt-8">No recent activity</p>;
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
          {recentActivities.map((activity, index) => (
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
