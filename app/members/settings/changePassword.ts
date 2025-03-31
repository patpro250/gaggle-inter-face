import axios from "axios";
import { ChangePasswordForm } from "./ChangePasswordModal";

export async function changePassword(updatedData: ChangePasswordForm) {
  try {
    const response = await axios.post(
      `http://localhost:4000/members/change-password`,
      updatedData,
      {
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg4OTZkMTQ5LWY5YjEtNDExOC1iNDE3LTBkNmJmOGFhYTI5ZiIsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJmaXJzdE5hbWUiOiJUZXJyeSIsImxhc3ROYW1lIjoiSmVzc3kiLCJpYXQiOjE3NDM0MzUxNzh9.9W2V0UN38sxk_IlsLjbmVLi-AmnrW7Hd-gNA0nC0gbk",
        },
      }
    );

    // If response status is 200 (success), return the success message
    if (response.status === 200) {
      return { success: true, message: response.data };
    }

    // Handle other statuses like 400 and return the error message
    return { success: false, message: response.data || "An error occurred." };
  } catch (error) {
    console.error("Error updating password:", error);
    return {
      success: false,
      message: error.response?.data || "An unexpected error occurred",
    };
  }
}
