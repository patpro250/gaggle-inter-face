import { z } from "zod";

export const catalogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  isbn: z.string().min(1, "ISBN is required"),
  published: z.string().min(1, "Published date is required"),
  publisher: z.string().min(1, "Publisher is required"),
  category: z.string().min(1, "Category is required"),
  language: z.string().min(1, "Language is required"),
  callNo: z.string().min(1, "Call number is required"),
  ddcCode: z.string().min(1, "DDC Code is required"),
  lccCode: z.string().min(1, "LCC Code is required"),
  placeOfPublication: z.string().min(1, "Place of publication is required"),
  edition: z.string().min(1, "Edition is required"),
  pages: z.coerce.number().min(1, "Must be a valid number"),
  coverImageURL: z.string().url("Invalid URL"),
  keywords: z.preprocess(
    (val) =>
      typeof val === "string"
        ? val
            .split(",")
            .map((kw) => kw.trim())
            .filter(Boolean)
        : [],
    z.array(z.string().min(1, "Each keyword must be at least 1 character"))
  ),
  format: z.enum(["AUDIO", "EBOOK", "HARDCOVER"], {
    errorMap: () => ({ message: "Format is required" }),
  }),
  description: z.string().min(1, "Description is required"),
});
