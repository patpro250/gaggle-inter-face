import { Container } from "@radix-ui/themes";
import TrendingInstitutions from "./Institutions";
import TrendingBooks from "./Books";
import { Metadata } from "next";
import { APP_NAME } from "@/app/constants";

export const metadata: Metadata = {
  title: `Trending on ${APP_NAME}`,
  description: "Look what others are enjoying"
}

const TrendingPage = () => {
  return (
    <Container>
      <h1 className="members-title">What's trending?</h1>
      <p className="members-paragraph">What other readers are liking!</p>
      <TrendingBooks />
      <TrendingInstitutions />
    </Container>
  );
};

export default TrendingPage;
