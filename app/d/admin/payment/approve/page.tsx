import React from "react";
import OTPForm from "./Form";
import PaymentWarningCard from "@/app/_components/Notice";

const Approved = () => {
  return (
    <div className=" min-h-[400px]  flex flex-col justify-center i ">
      <PaymentWarningCard />
      <OTPForm />
    </div>
  );
};

export default Approved;
