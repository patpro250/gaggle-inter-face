import axios from "axios";
import PersonalInformation from "./PersonalInformation";
import { getApiClient } from "@/app/g/schools/axios";

export async function fetchSettings() {
  try {
    const api = await getApiClient();
    const response = await api.get("/members/settings");

    const book = response.data;
    return book;
  } catch (ex) {
    return [];
  }
}

export async function changeSettings(updatedData: PersonalInformation) {
  try {
    const api = await getApiClient();
    const response = await api.put(`/members`, updatedData);
    return response.data;

  } catch (ex) {
    return null;
  }
}
