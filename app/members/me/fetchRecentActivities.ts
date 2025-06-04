import { getApiClient } from "@/app/g/schools/axios";

export async function fetchRecentActivities() {
  try {
    const api = await getApiClient();
    const response = await api.get('/members/recent-activities');

    const book = await response.data;
    return book;
  } catch (ex) {
    return null;
  }
}

