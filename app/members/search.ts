export async function search(query: string) {
  const response = await fetch(
    `http://localhost:4000/search/members?query=${query}`,
    {
      headers: {
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg4OTZkMTQ5LWY5YjEtNDExOC1iNDE3LTBkNmJmOGFhYTI5ZiIsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJpYXQiOjE3NDM0MDQyOTN9.lGu6tqwolkLozqzT1ykaFsH8ZuTNft7GoA0L5_WEKWc",
      },
    }
  );

  if (response.ok) {
    const results = await response.json();
    return results;
  } else {
    return null;
  }
}
