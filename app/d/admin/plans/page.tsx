"use client";
import PricingCards, {
  PricingCardsProps,
  PricingPlan,
} from "@/app/_components/pricing";
import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchPlans } from "./getPlans";

const Plans = () => {
  //   const { data } = useQueries({});

  const { data, isLoading, isError } = useQuery<PricingPlan[]>({
    queryKey: ["Plans"],
    queryFn: fetchPlans,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching payments.</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <PricingCards pricingPlans={data} />
    </div>
  );
};

export default Plans;
