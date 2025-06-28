"use client";

import React from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchSinglePlans } from "./getSinglePlan";
import PaymentInfoPage from "@/components/payInfo/payinfo";

type Props = {
  params: Promise<{ id: string }>; // params is now a Promise
};

const TakePlan = ({ params }: Props) => {
  const { id } = React.use(params); // unwrap the Promise using React.use

  const { error, isLoading } = useQuery({
    queryKey: ["plan", id],
    queryFn: () => fetchSinglePlans(id),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching plan.</div>;

  return (
    <>
      <PaymentInfoPage id={id} />
    </>
  );
};

export default TakePlan;
