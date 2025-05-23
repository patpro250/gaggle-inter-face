import PaymentHistory from "@/app/_components/paymentHistory";
import { PlanAndHistorySection } from "./card";

export default function ManualPaymentForm() {
  return (
    <>
      <div className="p-3 py-10 pb-50">
        <PlanAndHistorySection />
        <PaymentHistory />
      </div>
    </>
  );
}
