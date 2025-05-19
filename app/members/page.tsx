import { Container } from "@radix-ui/themes";
import Search from "./Search";
import Recommended from "./Recommended";

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
