import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import AddCatalogForm from "./NewCatalogForm";

const NewCatalogPage = () => {
  return (
    <div className="overflow-y-auto h-screen dark:bg-gray-900">
      <div className="flex items-center space-x-6 m-4">
        <Link href={`/catalog`}>
          <ArrowLeft className="stroke-1 dark:text-white" />
        </Link>
        <span className="text-left text-xl dark:text-white">Add new Book</span>
      </div>
      <AddCatalogForm />
    </div>
  );
};

export default NewCatalogPage;

export const metadata = {
  title: "Add new Book",
  description: "Add new Book to the NitBook Catalog",
};
