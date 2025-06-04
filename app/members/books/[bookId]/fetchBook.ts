import { getApiClient } from "@/app/g/schools/axios";

export async function fetchBook(id: string) {
  try {
    const api = await getApiClient();
    const response = await api.get(`/books/${id}`);

    return response.data;

  } catch (ex) {
    return null;
  }

}
