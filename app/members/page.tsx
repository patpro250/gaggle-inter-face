import { Container } from "@radix-ui/themes";
import Search from "./Search";
import Recommended from "./Recommended";
import { Metadata } from "next";
import { APP_NAME } from "../constants";

export const metadata: Metadata = {
  title: `Welcome to ${APP_NAME}`,
  description: "Browse and enjoy thousands of books and everything you want is here"
}

const BooksPage = () => {
  return (
    <Container>
      <h1 className="members-title">Books</h1>
      <p className="members-paragraph">
        All Your Favorites are <span className="text-primary">Here!</span>
      </p>
      <Search />
      <Recommended />
    </Container>
  );
};

export default BooksPage;
