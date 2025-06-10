import { ChangePasswordForm } from "./ChangePasswordModal";
import { getApiClient } from "@/app/g/schools/axios";

export async function changePassword(updatedData: ChangePasswordForm) {
  try {
    const api = await getApiClient();
    const response = await api.post(`/members/change-password`, updatedData);

    return { success: true, message: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data || "An unexpected error occurred",
    };
  }
}
