import React from "react";
import AdminPaymentPage from "../cmp/payment";
import DataOverView from "../cmp/card";

const Payment = () => {
  return (
    <div className="max-h-[500px] p-6 overflow-scroll">
      <DataOverView />
      <AdminPaymentPage />
    </div>
  );
};

export default Payment;
