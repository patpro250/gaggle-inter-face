"use client";

import { Dialog, Select } from "radix-ui";
import { Controller, useForm } from "react-hook-form";
import { ChevronDownIcon, Spinner } from "@radix-ui/themes";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import CloseButton from "@/app/_components/CloseButton";
import { useAddBookCopyModal } from "@/app/stores/useAddBookCopyModal";
import { CheckIcon } from "lucide-react";

const bookCopySchema = z.object({
    book: z.string().nonempty("Book is required"),
    condition: z.enum(["NEW", "GOOD", "DAMAGED", "OLD"]).optional(),
    dateOfAcquisition: z.string().optional(),
    callNo: z.string().min(3).max(20).optional(),
    libraryId: z.string().nonempty("Library ID is required"),
    barCode: z.string().max(15).optional(),
    code: z.string().nonempty("Code is required"),
});

export type AddBookCopy = z.infer<typeof bookCopySchema>;

const AddBookCopyModal = () => {
    const { isOpen, close } = useAddBookCopyModal();

    const { register, handleSubmit, control, formState: { errors, isSubmitting, isValid }, reset } = useForm<AddBookCopy>({ mode: "onChange", resolver: zodResolver(bookCopySchema) });

    const onSubmit = async (data: AddBookCopy) => {
        console.log(data);
        toast.success("Book copy added successfully");
        reset();
        close();
    };

    const fields: Array<[keyof AddBookCopy, string, string?, boolean?]> = [
        ["book", "Book Title"],
        ["dateOfAcquisition", "Date of Acquisition", "date", true],
        ["callNo", "Call Number", "text", true],
        ["barCode", "Barcode", "text", true],
        ["code", "Code"]
    ];

    return (
        <Dialog.Root open={isOpen} onOpenChange={(val) => !val && close()}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out" />
                <Dialog.Content className="fixed left-1/2 top-1/2 w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white dark:bg-gray-900 p-8 shadow-lg transition-all duration-300 ease-in-out focus:outline-none">
                    <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Add New Book Copy</Dialog.Title>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">


                        {fields.map(([name, label, type = "text", isOptional = false]) => (
                            <fieldset key={name} className="flex flex-col gap-2">
                                <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
                                <input
                                    id={name}
                                    type={type}
                                    {...register(name)}
                                    className="h-[40px] rounded-md px-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition duration-150 ease-in-out"
                                />
                            </fieldset>
                        ))}

                        <fieldset className="flex flex-col gap-2">
                            <label htmlFor="condition" className="text-sm font-medium text-gray-700 dark:text-gray-300">Condition</label>
                            <Controller
                                name="condition"
                                control={control}
                                render={({ field }) => (
                                    <Select.Root
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <Select.Trigger
                                            aria-label="Condition"
                                            className="flex items-center justify-between h-[40px] rounded-md px-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 shadow-sm focus:ring-2 focus:ring-primary transition duration-150 ease-in-out"
                                        >
                                            <Select.Value placeholder="Select Condition" />
                                            <Select.Icon>
                                                <ChevronDownIcon />
                                            </Select.Icon>
                                        </Select.Trigger>
                                        <Select.Portal>
                                            <Select.Content className="bg-white dark:bg-gray-800 rounded-md shadow-lg">
                                                <Select.Viewport>
                                                    {['NEW', 'GOOD', 'DAMAGED', 'OLD'].map((value) => (
                                                        <Select.Item
                                                            key={value}
                                                            value={value}
                                                            className="flex items-center px-4 py-2 text-gray-800 dark:text-white cursor-pointer hover:bg-primary/10"
                                                        >
                                                            <Select.ItemText>{value}</Select.ItemText>
                                                            <Select.ItemIndicator className="ml-auto">
                                                                <CheckIcon />
                                                            </Select.ItemIndicator>
                                                        </Select.Item>
                                                    ))}
                                                </Select.Viewport>
                                            </Select.Content>
                                        </Select.Portal>
                                    </Select.Root>
                                )}
                            />
                        </fieldset>


                        <div className="md:col-span-2 flex justify-end pt-4">
                            <button type="submit" disabled={!isValid || isSubmitting} className="inline-flex h-[40px] items-center justify-center rounded-md bg-primary px-6 text-white font-medium hover:bg-primary/90 transition disabled:opacity-50">
                                Save Book Copy {isSubmitting && <Spinner size="2" />}
                            </button>
                        </div>
                    </form>

                    <Dialog.Close asChild>
                        <button
                            className="absolute top-3 right-3 inline-flex size-[25px] items-center justify-center rounded-full text-gray-500 hover:text-red-500 focus:outline-none"
                            aria-label="Close"
                        >
                            <CloseButton />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default AddBookCopyModal;
