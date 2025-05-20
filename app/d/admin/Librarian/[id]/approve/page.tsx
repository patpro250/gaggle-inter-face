import Approve from "@/app/_components/approved";
import LibrarianDetail from "@/app/_components/librarianDetail";

interface Props {
  params: { id: number };
}

const EditLibarian = async ({ params: { id } }: Props) => {
  return (
    <div className="grid grid-cols-1 p-6 pt-10 gap-3 md:grid-cols-2">
      <LibrarianDetail id={`${id}`} />
      <Approve id={`${id}`} />
    </div>
  );
};

export default EditLibarian;
