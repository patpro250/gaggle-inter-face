import NavBar from "../ui/nav-bar/page";
import Footer from "./Footer";
import Intro from "./Intro";
import SearchCatalog from "./SearchCatalog";

const CatalogPage = () => {
  return (
    <>
      <NavBar />
      <div className="mx-24 mt-6">
        <Intro />
        <SearchCatalog />
      </div>
      <Footer />
    </>
  );
};

export default CatalogPage;
