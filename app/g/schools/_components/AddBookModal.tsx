"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AddBook from "../books/AddBook";
import addBook from "./addBook";
import toast from "react-hot-toast";
import { Spinner } from "@radix-ui/themes";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const languageCodes = [
    "en", "fr", "rw"
];

export const addBookSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    author: z.string().min(3, "Author must be at least 3 characters"),
    publisher: z.string().min(2, "Publisher must be at least 2 characters"),
    published: z.coerce.date(),
    firstAcquisition: z.coerce.date(),
    isbn: z.string().min(10, "ISBN must be at least 10 characters").optional(),
    placeOfPublication: z.string().optional(),
    language: z.enum(languageCodes as [string, ...string[]], {
        errorMap: () => ({ message: "Invalid language code" }),
    }),
    edition: z.string().max(20, "Edition must be at most 20 characters").optional(),
    numberOfPages: z.coerce.number().min(5).max(10000),
    callNo: z.string().min(3).max(20).optional(),
    barCode: z.string().max(15).optional(),
    ddcCode: z.string().max(15).optional(),
    genre: z.string().min(3)
});

export type AddBook = z.infer<typeof addBookSchema>;

const AddBookModal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        reset,
    } = useForm<AddBook>({ resolver: zodResolver(addBookSchema) });

    const onSubmit = async (data: AddBook) => {
        const send = await addBook(data);
        if (send.success) {
            toast.success(send.message);
            reset();
        } else {
            toast.error(send.message);
        }
    };

    const fields: Array<[keyof AddBook, string, string?]> = [
        ["title", "Title"],
        ["author", "Author"],
        ["publisher", "Publisher"],
        ["published", "Published Date", "date"],
        ["firstAcquisition", "First Acquisition", "date"],
        ["isbn", "ISBN"],
        ["language", "Language"],
        ["edition", "Edition"],
        ["numberOfPages", "Pages", "number"],
        ["callNo", "Call No"],
        ["barCode", "Barcode"],
        ["ddcCode", "DDC Code"],
        ["genre", "Genre"],
        ["placeOfPublication", "Place of Publication"],
    ];

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="inline-flex h-[35px] items-center justify-center rounded bg-primary px-[15px] font-medium text-white hover:bg-primary/80 focus:outline-none focus-visible:outline-2 focus-visible:outline-primary">
                    Add Book
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-overlayShow" />
                <Dialog.Content className="fixed left-1/2 top-1/2 w-[95vw] max-w-3xl max-h-[90vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white dark:bg-gray-900 p-6 shadow-lg focus:outline-none data-[state=open]:animate-contentShow">
                    <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        Add New Book
                    </Dialog.Title>
                    <Dialog.Description className="mb-4 text-gray-600 dark:text-gray-300 text-sm">
                        Fill in the book details below and click save to continue.
                    </Dialog.Description>

                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {fields.map(([name, label, type = "text"]) => (
                            <fieldset key={name} className="flex flex-col gap-1">
                                <label
                                    htmlFor={name}
                                    className="text-[15px] font-medium text-gray-700 dark:text-gray-300"
                                >
                                    {label}
                                </label>
                                <input
                                    id={name}
                                    type={type}
                                    {...register(name)}
                                    className="h-[35px] rounded px-2.5 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 shadow-sm border border-gray-300 dark:border-gray-700 outline-none focus:ring-2 focus:ring-primary"
                                />
                                {errors[name] && (
                                    <span className="text-red-500 text-xs">
                                        {(errors as any)[name]?.message}
                                    </span>
                                )}
                            </fieldset>
                        ))}

                        <div className="md:col-span-2 flex justify-end pt-4">

                            <button
                                type="submit"
                                disabled={!isValid}
                                className="inline-flex h-[35px] items-center justify-center rounded bg-primary px-6 text-white font-medium hover:bg-primary/90 transition"
                            >
                                Save Book {isSubmitting && <Spinner size="2" />}
                            </button>
                        </div>
                    </form>

                    <Dialog.Close asChild>
                        <button
                            className="absolute top-3 right-3 inline-flex size-[25px] items-center justify-center rounded-full text-gray-500 hover:text-red-500 focus:outline-none"
                            aria-label="Close"
                        >
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default AddBookModal;
