import { getApiClient } from "@/app/g/schools/axios";

export async function fetchMemberStats() {
  try {
    const api = await getApiClient();
    const response = await api.get('/members/stats');
    return response.data;
  } catch (ex) {
    return null;
  }

}