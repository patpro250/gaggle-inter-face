import NavBar from "../ui/nav-bar/page";
import Footer from "./Footer";
import Intro from "./Intro";
import SearchCatalog from "./SearchCatalog";

export const metadata = {
  title: "Catalog",
  description: "Explore our catalog of books.",
};

const CatalogPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 w-full min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow px-4 sm:px-8 md:px-16 lg:px-24 mt-20 w-full">
        <Intro />
        <SearchCatalog />
      </main>
      <Footer />
    </div>
  );
};

export default CatalogPage;
