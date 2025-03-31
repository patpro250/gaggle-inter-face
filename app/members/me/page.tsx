<<<<<<< HEAD
import React from "react";

const MyActivity = () => {
  return <h1>My activity</h1>;
=======
import BookLoans from "./BookLoans";
import MemberOverview from "./MemberOverview";
import RecentActivities from "./RecentActivities";
import Reservations from "./Reservations";

const MyActivity = () => {
  return (
    <>
      <h1 className="text-4xl font-bold">
        <span className="text-black">Hello,</span>{" "}
        <span className="text-primary">Terry</span>!
      </h1>
      <MemberOverview />
      <BookLoans />
      <Reservations />
      <RecentActivities />
    </>
  );
>>>>>>> 15ce52c
};

export default MyActivity;
