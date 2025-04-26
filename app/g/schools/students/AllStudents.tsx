import React from "react";

// Sample data for students
const students = [
  {
    name: "John Doe",
    parentPhone: "123-456-7890",
    className: "Grade 10",
    status: "Active",
    email: "johndoe@example.com",
    studentCard: "SC12345",
  },
  {
    name: "Jane Smith",
    parentPhone: "987-654-3210",
    className: "Grade 9",
    status: "Inactive",
    email: "janesmith@example.com",
    studentCard: "SC12346",
  },
  {
    name: "Sam Johnson",
    parentPhone: "555-123-4567",
    className: "Grade 11",
    status: "Active",
    email: "samjohnson@example.com",
    studentCard: "SC12347",
  },
];

const AllStudents = () => {
  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="w-full border-collapse text-sm rounded-lg border-gray-300 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
          <tr>
            <th className="p-4 text-left rounded-tl-lg border-b border-gray-300 dark:border-gray-700">Names</th>
            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Parent's Phone Number</th>
            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Class</th>
            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Status</th>
            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Email</th>
            <th className="p-4 text-left rounded-tr-lg border-b border-gray-300 dark:border-gray-700">Student Card</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="table-r dark:hover:bg-gray-700 transition-colors">
              <td className="table-data">{student.name}</td>
              <td className="table-data">{student.parentPhone}</td>
              <td className="table-data">{student.className}</td>
              <td className="table-data">{student.status}</td>
              <td className="table-data">{student.email}</td>
              <td className="table-data">{student.studentCard}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudents;
