// @ts-nocheck
import { auth } from "../../../auth";
import { getApiClient } from "../axios";

const api = await getApiClient();

export async function get(url: string) {
  try {
    const response = await api.get('/librarians/overview');

    return response.status === 200 ? response.data : null;
  } catch (ex) {
    console.error("API error:", ex);
    return null;
  }
}
