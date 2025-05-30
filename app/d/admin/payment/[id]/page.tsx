"use client";

import React from "react";
import PaymentInfoPage from "../payInfo/page";
import { useQuery } from "@tanstack/react-query";
import { fetchSinglePlans } from "./getSinglePlan";

type Props = {
  params: Promise<{ id: string }>; // params is now a Promise
};

const TakePlan = ({ params }: Props) => {
  const { id } = React.use(params); // unwrap the Promise using React.use

  const { data, error, isLoading } = useQuery({
    queryKey: ["plan", id],
    queryFn: () => fetchSinglePlans(id),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching plan.</div>;

  return (
    <>
      <PaymentInfoPage Data={data} />
    </>
  );
};

export default TakePlan;

// function fetchSinglePlan(id: string): any {
//   throw new Error("Function not implemented.");
// }
// function fetchSinglePlan(id: string) {
//   // Replace this with actual fetching logic
//   return fetch(`/api/plans/${id}`).then((res) => res.json());
// }
