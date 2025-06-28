"use client";
import PricingCards, { PricingPlan } from "@/app/_components/pricing";
import { PricingCardSkeleton } from "@/app/_components/PricingCardSkeleton";
import { fetchPlans } from "@/app/d/admin/plans/getPlans";
import { useQuery } from "@tanstack/react-query";

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
