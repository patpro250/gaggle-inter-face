// @ts-nocheck
import { auth } from "@/app/auth";
import BookLoans from "./BookLoans";
import MemberOverview from "./MemberOverview";
import RecentActivities from "./RecentActivities";
import Reservations from "./Reservations";
import { Metadata } from "next";
import { APP_NAME } from "@/app/constants";

export const metadata: Metadata = {
  title: `My account | ${APP_NAME}`,
  description: "View all the details of all library activities including borrowings and more..."
}

const MyActivity = async () => {
  const { user } = await auth();
  return (
    <>
      <h1 className="text-4xl font-bold">
        <span className="text-black">Hello,</span>{" "}
        <span className="text-primary">{`${user?.firstName} ${user?.lastName} `}</span>!
      </h1>
      <MemberOverview />
      <BookLoans />
      <Reservations />
      <RecentActivities />
    </>
  );
};

export default MyActivity;
