import { getApiClient } from "@/app/g/schools/axios";

export async function fetchReservations() {
  try {
    const api = await getApiClient();
    const response = await api.get("/reservations/my-reservations");

    const book = await response.data;
    return book;
  } catch (ex) {
    console.error("Error fetching reservations:", ex);
    return null;
  }
}
