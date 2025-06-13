// import PersonalInformation from "./PersonalInformation";
// import { getApiClient } from "@/app/g/schools/axios";

// export async function fetchSettings() {
//   try {
//     const api = await getApiClient();
//     const response = await api.get("/members/settings");

//     const book = response.data;
//     return book;
//   } catch (ex) {
//     console.error("Error fetching settings:", ex);
//     return [];
//   }
// }

// export async function changeSettings(updatedData: PersonalInformation) {
//   try {(settings)
//     const api = await getApiClient();
//     const response = await api.put(`/members`, updatedData);
//     return response.data;
//   } catch (ex) {
//     console.error("Error changing settings:", ex);
//     return null;
//   }
// }
