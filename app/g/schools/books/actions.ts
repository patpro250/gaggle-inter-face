"use server";

import { getBooks } from "@/app/test/book-helper";
import { getApiClient } from "../axios";

export const fetchBooks = async () => {
  const api = await getApiClient();
  const response = await api.get(`/books/schools`);
  return response.data;
};

export const fetchBooks2 = async () => {
  return getBooks({});
};
