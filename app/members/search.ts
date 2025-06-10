import { getApiClient } from "../g/schools/axios";

export async function search(query: string) {
  try {
    const api = await getApiClient();

    const response = await api.get(`/books/?q=${query}`);
    return response.data?.books;
  } catch (ex) {
    console.error("Error searching books:", ex);
    return null;
  }
}
