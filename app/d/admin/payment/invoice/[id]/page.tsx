"use client";
import React from "react";
import Invoice from "./invoiceTemplet";
import { useQuery } from "@tanstack/react-query";
import { fetchSinglePayment } from "../../[id]/getSinglePlan";
import InvoiceSkeleton from "@/app/_components/invoiceSkleton";

type Props = {
  params: Promise<{ id: string }>; // params is now a Promise
};

const TakeInvoice = ({ params }: Props) => {
  const { id } = React.use(params); // unwrap the Promise using React.use

  const { data, error, isLoading } = useQuery({
    queryKey: ["SinglePayment", id],
    queryFn: () => fetchSinglePayment(id),
    enabled: !!id,
  });

  if (isLoading)
    return (
      <div>
        <InvoiceSkeleton />
      </div>
    );
  if (error) return <div>Error fetching plan.</div>;

  return (
    <>
      <Invoice paymentData={data} />
    </>
  );
};

export default TakeInvoice;
