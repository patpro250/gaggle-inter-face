import React from "react";
import LinkAsider from "./cmp/linkAsider";
import { Home, House } from "lucide-react";
import GGLayout from "./layout";
import HomePage from "./home/page";
import { LogoutButton } from "@/app/login/Logout";

export default function InstitutionDashboard() {
  return (
    <>
      <LogoutButton />
      <HomePage />
    </>
  );
}
