import { getBooks } from './book-helper';
import BookTable from './BooksTable';

export default async function BooksPage({ searchParams }: { searchParams: Record<string, string> }) {
  const data = await getBooks({
    q: searchParams.q,
    limit: Number(searchParams.limit) || 10,
    sort: searchParams.sort,
    cursor: searchParams.cursor,
    language: searchParams.language,
  });

  return <BookTable serverData={data} />;
}
