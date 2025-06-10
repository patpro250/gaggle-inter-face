type Book = {
  title: string;
  author: string;
  publisher: string;
  published: string | Date;
  institution: {
    name: string;
    address: string;
  };
};

type Institution = {
  name: string;
  email: string;
  phone: string;
  rating: number;
};

type SearchResultsProps = {
  books: Book[];
  institutions: Institution[];
  searched: boolean;
};

const SearchResults = ({
  books,
  institutions,
  searched,
}: SearchResultsProps) => {
  return (
    <div className="mt-6">
      {!searched ? null : books.length === 0 && institutions.length === 0 ? (
        <p className="text-center mt-3">No results found.</p>
      ) : (
        <>
          {books.length > 0 && (
            <div>
              <h3 className="font-bold text-2xl text-left mb-3 text-primary">
                Books
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {books.map((book, index) => (
                  <div key={index} className="mb-4">
                    <div className="p-4 rounded-md">
                      <h3 className="text-xl font-semibold">{book.title}</h3>
                      <p className="text-gray-600">{book.author}</p>
                      <p className="text-gray-400">{book.publisher}</p>
                      <p className="text-sm text-gray-500">
                        Published:{" "}
                        {new Date(book.published).toLocaleDateString()}
                      </p>
                      <div className="mt-4">
                        <h4 className="text-md font-semibold">Institution:</h4>
                        <p>{book.institution.name}</p>
                        <p>{book.institution.address}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {institutions.length > 0 && (
            <div className="w-full">
              <h3 className="font-bold text-2xl text-left mb-3 text-primary">
                Institutions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {institutions.map((institution, index) => (
                  <div key={index} className="mb-4">
                    <div className="rounded-md">
                      <h3 className="text-xl font-semibold">
                        {institution.name}
                      </h3>
                      <p className="text-gray-600">{institution.email}</p>
                      <p className="text-sm text-gray-500">
                        {institution.phone}
                      </p>
                      <div className="mt-4">
                        <p className="text-sm text-gray-500">
                          Rating: {institution.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
