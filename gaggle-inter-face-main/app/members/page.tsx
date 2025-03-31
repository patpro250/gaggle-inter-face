import { Container } from "@radix-ui/themes";
import Search from "./Search";
import Recommended from "./Recommended";

const BooksPage = () => {
  return (
    <Container>
      <h1 className="members-title">Books</h1>
      <p className="members-paragraph">All your favorites are here</p>
      <Search />
      <Recommended />
    </Container>
  );
};

export default BooksPage;
