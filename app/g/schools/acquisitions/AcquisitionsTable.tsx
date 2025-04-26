import React from "react";
import Pagination from "../books/Pagination";

const acquisitions = [
    { bookCode: "BKG123", bookCopies: 50, bookTitle: "The Great Gatsby", supplierName: "Scribner", supplierEmail: "contact@scribner.com" },
    { bookCode: "BKG124", bookCopies: 30, bookTitle: "1984", supplierName: "Secker & Warburg", supplierEmail: "info@seckerwarburg.com" },
    { bookCode: "BKG125", bookCopies: 40, bookTitle: "To Kill a Mockingbird", supplierName: "J.B. Lippincott & Co.", supplierEmail: "support@lippincott.com" },
    { bookCode: "BKG126", bookCopies: 60, bookTitle: "Pride and Prejudice", supplierName: "T. Egerton", supplierEmail: "egerton@t-egerton.com" },
    { bookCode: "BKG127", bookCopies: 20, bookTitle: "Moby Dick", supplierName: "Harper & Brothers", supplierEmail: "harper@harperbrothers.com" },
];

const AcquisitionsTable = () => {
    return (
        <>
            <h2 className="library-subtitle mt-6 mb-4">Recent acquisitions</h2>
            <div className="overflow-x-auto border rounded-xl border-gray-400">
                <table className="w-full border-collapse text-sm rounded-lg border-gray-300 dark:border-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        <tr>
                            <th className="p-4 text-left rounded-tl-lg border-b border-gray-300 dark:border-gray-700">Book Title</th>
                            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Book Code</th>
                            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Book Copies</th>
                            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Supplier Name</th>
                            <th className="p-4 text-left border-b border-gray-300 dark:border-gray-700">Supplier Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {acquisitions.map((acquisition, index) => (
                            <tr key={index} className="table-r dark:hover:bg-gray-700 transition-colors">
                                <td className="table-data">{acquisition.bookTitle}</td>
                                <td className="table-data">{acquisition.bookCode}</td>
                                <td className="table-data">{acquisition.bookCopies}</td>
                                <td className="table-data">{acquisition.supplierName}</td>
                                <td className="table-data">{acquisition.supplierEmail}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination />
        </>
    );
};

export default AcquisitionsTable;
