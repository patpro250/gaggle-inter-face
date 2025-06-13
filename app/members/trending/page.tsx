// app/members/trending/page.tsx
export const dynamic = "force-dynamic";

import { Container } from "@radix-ui/themes";
import TrendingBooks from "./Books";
import TrendingInstitutions from "./Institutions";
import { Metadata } from "next";
import { APP_NAME } from "@/app/constants";

export const metadata: Metadata = {
  title: `Trending on ${APP_NAME}`,
  description: "Look what others are enjoying",
};

export default function TrendingPage() {
  return (
    <Container>
      <h1 className="members-title">What&apos;s trending?</h1>
      <p className="members-paragraph">What other readers are liking!</p>
      <TrendingBooks />
      <TrendingInstitutions />
    </Container>
  );
}
