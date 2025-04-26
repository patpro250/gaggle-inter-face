import React from "react";

// Sample data for students who lost books
const lostBooks = [
    {
        studentCode: "SC12345",
        studentName: "John Doe",
        studentClass: "Grade 10",
        bookTitle: "The Great Gatsby",
        bookCode: "B001",
        lostDate: "2025-03-01", // Date when the book was lost
        daysSinceLost: 30, // Dummy data for days since lost
        author: "F. Scott Fitzgerald",
        publisher: "Scribner",
    },
    {
        studentCode: "SC12346",
        studentName: "Jane Smith",
        studentClass: "Grade 9",
        bookTitle: "1984",
        bookCode: "B002",
        lostDate: "2025-03-15",
        daysSinceLost: 16,
        author: "George Orwell",
        publisher: "Secker & Warburg",
    },
    {
        studentCode: "SC12347",
        studentName: "Sam Johnson",
        studentClass: "Grade 11",
        bookTitle: "To Kill a Mockingbird",
        bookCode: "B003",
        lostDate: "2025-03-20", // Date when the book was lost
        daysSinceLost: 11, // Dummy data for days since lost
        author: "Harper Lee",
        publisher: "J.B. Lippincott & Co.",
    },
];

const StudentsLostBooksTable = () => {
    return (
        <div className="overflow-x-auto rounded-xl">
            <table className="w-full border-collapse text-sm rounded-lg border-gray-300 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <tr>
                        <th className="p-4 text-left rounded-tl-lg border-b border-gray-300 dark:border-gray-700">Student Code</th>
                        <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Name</th>
                        <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Class</th>
                        <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Book Title</th>
                        <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Book Code</th>
                        <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Days Since Lost</th>
                        <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Author</th>
                        <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Publisher</th>
                    </tr>
                </thead>
                <tbody>
                    {lostBooks.map((item, index) => (
                        <tr key={index} className="table-r dark:hover:bg-gray-700 transition-colors">
                            <td className="table-data">{item.studentCode}</td>
                            <td className="table-data">{item.studentName}</td>
                            <td className="table-data">{item.studentClass}</td>
                            <td className="table-data">{item.bookTitle}</td>
                            <td className="table-data">{item.bookCode}</td>
                            <td className="table-data">{item.daysSinceLost}</td>
                            <td className="table-data">{item.author}</td>
                            <td className="table-data">{item.publisher}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentsLostBooksTable;
