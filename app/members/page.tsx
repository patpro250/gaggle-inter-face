import { Container } from "@radix-ui/themes";
import Search from "./Search";
import Recommended from "./Recommended";
import { motion } from "framer-motion";

const BooksPage = () => {
  return (
    <Container>
      <h1 className="members-title">Books</h1>
      <p className="members-paragraph">All your favorites is here</p>
      <Search />
      <Recommended />
    </Container>
  );
};

export default BooksPage;
