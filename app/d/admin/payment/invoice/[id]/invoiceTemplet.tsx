"use client";

import React, { useRef } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import Image from "next/image";

export interface Payment {
  id: string;
  institutionId: string;
  planId: string;
  amount: number;
  currency: string;
  confirmationCode: string;
  phoneNumber: string | null;
  status: "SUCCESS" | "PENDING" | "FAILED"; // add others if needed
  method: "MOBILE_MONEY" | "BANK_TRANSFER" | "CASH"; // extend if needed
  doneAt: string; // ISO date string

  institution: {
    name: string;
    address?: string; // optional if not always available
  };

  PricingPlan: {
    name: string;
    features?: string[]; // optional array of plan features
  };

  client?: {
    name: string;
    email?: string;
    address?: string;
  };
}

type InvoiceProps = {
  paymentData: Payment;
};

// const paymentData = {
//   id: "7ecdfe0f-ccfb-4b0f-9515-17d684e11a11",
//   institution: {
//     name: "g.s mater dei nyanza",
//   },
//   PricingPlan: {
//     name: "Basic",
//   },
//   amount: 5000,
//   confirmationCode: "788905",
//   currency: "RWF",
//   method: "MOBILE_MONEY",
//   doneAt: "2025-05-23T17:35:03.511Z",
// };

export default function Invoice({ paymentData }: InvoiceProps) {
  const printRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [297, 350],
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const ratio = Math.min(pdfWidth / canvas.width, pdfHeight / canvas.height);
    const imgScaledWidth = canvas.width * ratio;
    const imgScaledHeight = canvas.height * ratio;
    const marginX = (pdfWidth - imgScaledWidth) / 2;
    const marginY = (pdfHeight - imgScaledHeight) / 2;

    pdf.addImage(
      imgData,
      "PNG",
      marginX,
      marginY,
      imgScaledWidth,
      imgScaledHeight
    );
    pdf.save(`Invoice-${paymentData.id}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold text-sub-primary">
            Payment Invoice
          </h1>
          <button
            onClick={handleDownloadPdf}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-sub-primary"
          >
            Download PDF
          </button>
        </div>

        <div ref={printRef} className="bg-white text-sm pt-4 pb-4 px-6">
          <div className="flex items-center justify-between border-b pb-4 ">
            <div className=" mb-4">
              <p className="text-gray-600">
                Invoice ID: <strong>{paymentData.id}</strong>
              </p>
              <p className="text-gray-600">
                Date: {new Date(paymentData.doneAt).toLocaleDateString()}
              </p>
            </div>

            <Image width={100} height={100} src={"/image.svg"} alt={""}></Image>
          </div>

          <div className="flex justify-between mb-6">
            <div>
              <h2 className="font-semibold text-gray-800 ">From:</h2>
              <p className=" text-primary  ">Gaggleniti Group</p>
              {/* <p>123 Knowledge Street</p>
              <p>Library City, RW</p> */}
            </div>
            <div className="text-right">
              <h2 className="font-semibold text-gray-800">To:</h2>
              <p>{paymentData.institution.name}</p>
              <p>Institution ID: {paymentData.id.slice(0, 8)}</p>
            </div>
          </div>

          <table className="w-full mb-4 border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="border px-3 py-2 text-left">Description</th>
                <th className="border px-3 py-2 text-right">Amount</th>
                <th className="border px-3 py-2 text-right">Currency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">
                  {paymentData.PricingPlan.name} Plan ({paymentData.method})
                </td>
                <td className="border px-3 py-2 text-right">
                  {paymentData.amount}
                </td>
                <td className="border px-3 py-2 text-right">
                  {paymentData.currency}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-end mb-2">
            <div className="w-64 space-y-1">
              <div className="flex justify-between font-bold text-lg text-sub-primary">
                <span>Total Paid:</span>
                <span>
                  {paymentData.amount} {paymentData.currency}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Method:</span>
                <span>{paymentData.method.replace("_", " ")}</span>
              </div>
              <div className="flex justify-between">
                <span>Confirmation Code:</span>
                <span className=" text-primary font-semibold ">
                  {paymentData.confirmationCode}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-gray-500 text-center">
            This invoice was generated by Gagglenit Group on{" "}
            {new Date().toLocaleDateString()}.
          </div>
        </div>
      </div>
    </div>
  );
}
