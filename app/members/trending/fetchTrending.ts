export async function fetchTrendingBooks() {
  const response = await fetch(`http://localhost:4000/books/popular`, {
    headers: {
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg4OTZkMTQ5LWY5YjEtNDExOC1iNDE3LTBkNmJmOGFhYTI5ZiIsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJpYXQiOjE3NDM0MDQyOTN9.lGu6tqwolkLozqzT1ykaFsH8ZuTNft7GoA0L5_WEKWc",
    },
  });

  if (response.ok) {
    const book = await response.json();
    return book;
  } else {
    return null;
  }
}
