"use server";

import axios from "axios";
import { LibrarianCredentials } from "./LoginForm";

async function loginLibrarian(credentials: LibrarianCredentials) {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/librarians`,
    credentials
  );

  if (response.status !== 200) {
    return response.data;
  }

  return "Login successful";
}
