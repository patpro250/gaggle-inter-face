"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { catalogSchema } from "./catalogSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import sendCatalog from "./sendCatalog";
import toast from "react-hot-toast";

export type Catalog = z.infer<typeof catalogSchema>;

export default function AddCatalogForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Catalog>({
    resolver: zodResolver(catalogSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: Catalog) => {
    let newDate = new Date(data.published).toISOString();
    data = { ...data, published: newDate };
    const response = await sendCatalog(data);
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message || "An error occurred. Please try again.");
    }
  };

  return (
    <form
      className="grid grid-cols-1 mb-4 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10 px-4 text-gray-900 dark:text-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Title */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">Title</label>
        <input
          {...register("title")}
          placeholder="Title"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      {/* Author */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">Author</label>
        <input
          {...register("author")}
          placeholder="Author"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.author && (
          <p className="text-red-500">{errors.author.message}</p>
        )}
      </div>

      {/* Call number */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">Call number</label>
        <input
          {...register("callNo")}
          placeholder="Call number"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.callNo && (
          <p className="text-red-500">{errors.callNo.message}</p>
        )}
      </div>

      {/* ISBN */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">ISBN</label>
        <input
          {...register("isbn")}
          placeholder="ISBN"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.isbn && <p className="text-red-500">{errors.isbn.message}</p>}
      </div>

      {/* Published Date */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">Published Date</label>
        <input
          {...register("published")}
          placeholder="Published Date"
          type="date"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.published && (
          <p className="text-red-500">{errors.published.message}</p>
        )}
      </div>

      {/* Publisher */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">Publisher</label>
        <input
          {...register("publisher")}
          placeholder="Publisher"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.publisher && (
          <p className="text-red-500">{errors.publisher.message}</p>
        )}
      </div>

      {/* Category */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">Category</label>
        <input
          {...register("category")}
          placeholder="Category"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}
      </div>

      {/* Language */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">Language</label>
        <input
          {...register("language")}
          placeholder="Language"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.language && (
          <p className="text-red-500">{errors.language.message}</p>
        )}
      </div>

      {/* DDC Code */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">DDC Code</label>
        <input
          {...register("ddcCode")}
          placeholder="DDC Code"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.ddcCode && (
          <p className="text-red-500">{errors.ddcCode.message}</p>
        )}
      </div>

      {/* LLC Code */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">LLC Code</label>
        <input
          {...register("lccCode")}
          placeholder="LLC Code"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.lccCode && (
          <p className="text-red-500">{errors.lccCode.message}</p>
        )}
      </div>

      {/* Place of Publication */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">
          Place of Publication
        </label>
        <input
          {...register("placeOfPublication")}
          placeholder="Place of Publication"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.placeOfPublication && (
          <p className="text-red-500">{errors.placeOfPublication.message}</p>
        )}
      </div>

      {/* Edition */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">Edition</label>
        <input
          {...register("edition")}
          placeholder="Edition"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.edition && (
          <p className="text-red-500">{errors.edition.message}</p>
        )}
      </div>

      {/* Number of Pages */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">
          Number of Pages
        </label>
        <input
          {...register("pages")}
          placeholder="Number of Pages"
          type="number"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.pages && <p className="text-red-500">{errors.pages.message}</p>}
      </div>

      {/* Cover Image URL */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">
          Cover Image URL
        </label>
        <input
          {...register("coverImageURL")}
          placeholder="Cover Image URL"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.coverImageURL && (
          <p className="text-red-500">{errors.coverImageURL.message}</p>
        )}
      </div>

      {/* Keywords */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">Keywords</label>
        <input
          {...register("keywords")}
          placeholder="Keywords"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary"
        />
        {errors.keywords && (
          <p className="text-red-500">{errors.keywords.message}</p>
        )}
      </div>

      {/* Format */}
      <div className="relative">
        <label className="block mb-1 text-sm font-medium">Format</label>
        <select
          {...register("format")}
          className="w-full py-3 px-4 rounded-lg shadow-sm border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary transition duration-300"
        >
          <option value="">Select Format</option>
          <option value="AUDIO">Audio</option>
          <option value="EBOOK">E-book</option>
          <option value="HARDCOVER">Hardcover</option>
        </select>
        {errors.format && (
          <p className="text-red-500">{errors.format.message}</p>
        )}
      </div>

      {/* Description */}
      <div className="md:col-span-3">
        <label className="block mb-1 text-sm font-medium">Description</label>
        <textarea
          {...register("description")}
          rows={5}
          placeholder="Description"
          className="w-full py-3 pl-4 pr-5 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary resize-none"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex w-full items-center justify-start">
        <button type="submit" className="primary-button" disabled={!isValid}>
          Add book
        </button>
      </div>
    </form>
  );
}
