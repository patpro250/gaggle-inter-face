import { getApiClient } from "@/app/g/schools/axios";

export async function fetchBookLoans() {
  try {
    const api = await getApiClient();
    const res = await api.get("/circulation/current-loans");
    return res.data;
  } catch (ex) {
    console.error("Error fetching book loans:", ex);
    return null;
  }
}
