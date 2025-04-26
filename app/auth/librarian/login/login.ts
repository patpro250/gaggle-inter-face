import { signIn } from "../../../auth";
import { LibrarianCredentials } from "./LoginForm";

async function loginLibrarian(credentials: LibrarianCredentials) {
  return {
    success: false,
    message: "We are still testing this feature",
  };
}

export default loginLibrarian;
