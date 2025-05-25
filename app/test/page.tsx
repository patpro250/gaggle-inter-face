import { fetchBooks } from "../g/schools/books/actions"
import { BookTable, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<BookTable[]> {
  const books = await fetchBooks();
  return books;
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
