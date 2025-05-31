"use client";
import PricingCards, {
  PricingCardsProps,
  PricingPlan,
} from "@/app/_components/pricing";
import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchPlans } from "./getPlans";
import { PricingCardSkeleton } from "@/app/_components/PricingCardSkeleton";

const Plans = () => {
  //   const { data } = useQueries({});

  const { data, isLoading, isError } = useQuery<PricingPlan[]>({
    queryKey: ["Plans"],
    queryFn: fetchPlans,
  });

  if (isLoading) return <PricingCardSkeleton />;
  // {isLoading ?  : <PricingCards pricingPlans={data} />}
  if (isError) return <p>Error fetching payments.</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <PricingCards pricingPlans={data} />
    </div>
  );
};

export default Plans;
