"use client";
import React from "react";
import pdfMake from "pdfmake/build/pdfmake";

const data = [
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
];

export default function ExportPdfButton() {
  const generatePdf = () => {
    const body = [
      ["Title", "Author", "Year"],
      ...data.map((book) => [book.title, book.author, book.year.toString()]),
    ];

    const docDefinition = {
      content: [
        { text: "Books List", style: "header" },
        {
          table: {
            headerRows: 1,
            widths: ["*", "*", "auto"],
            body,
          },
          layout: {
            fillColor: (rowIndex: number) =>
              rowIndex === 0 ? "#CCCCCC" : rowIndex % 2 === 0 ? "#F3F3F3" : null,
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          marginBottom: 15,
        },
      },
    };

    pdfMake.createPdf(docDefinition).download("books-list.pdf");
  };

  return (
    <button
      onClick={generatePdf}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Export PDF
    </button>
  );
}
