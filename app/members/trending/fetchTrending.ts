import { getApiClient } from "@/app/g/schools/axios";

export async function fetchTrendingBooks() {
  try {
    const api = await getApiClient();
    const response = await api.get(`/books/popular`);

    const book = await response.data;
    return book;
  } catch (ex) {
    return null;
  }

}
