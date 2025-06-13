// app/d/admin/Librarian/[id]/approve/page.tsx

import Approve from "@/app/_components/approved";
import LibrarianDetail from "@/app/_components/librarianDetail";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page(props: Props) {
  const { id } = await props.params;

  return (
    <div className="grid grid-cols-1 p-6 pt-10 gap-3 md:grid-cols-2">
      <LibrarianDetail id={id} />
      <Approve id={id} />
    </div>
  );
}
