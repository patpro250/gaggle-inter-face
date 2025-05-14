import CloseButton from "@/app/_components/CloseButton";
import RequiredFieldsWarning from "@/app/_components/RequiredFieldsWarning";
import { useIssueBookModal } from "@/app/stores/useIssueBookModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@radix-ui/themes";
import { Dialog } from "radix-ui";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const issueBookSchema = z.object({
    copyId: z.string().min(3, "Copy ID must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    dueDate: z.string().nonempty("Due date is required"),
});

export type IssueBook = z.infer<typeof issueBookSchema>;

const IssueBookModal = () => {
    const { isOpen, close } = useIssueBookModal();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        reset,
    } = useForm<IssueBook>({ mode: "onChange", resolver: zodResolver(issueBookSchema) });

    const onSubmit = async (data: IssueBook) => {
        const response = { success: '1', message: '1' };
        if (response.success) {
            toast.success(response.message);
            reset();
        } else {
            toast.error(response.message);
        }
    };
    return (
        <Dialog.Root open={isOpen} onOpenChange={(val) => !val && close()}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                <Dialog.Content className="fixed left-1/2 top-1/2 w-[95vw] max-w-md max-h-[90vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-8 shadow-lg">
                    <Dialog.Title className="text-xl font-semibold mb-1">Issue Book</Dialog.Title>
                    <Dialog.Description className="mb-4 text-gray-600">Fill in the details below to issue a book.</Dialog.Description>

                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
                        <fieldset className="flex flex-col gap-2">
                            <label htmlFor="copyId">Copy ID</label>
                            <input {...register("copyId")} className="input" />
                            {errors.copyId && <span className="text-red-500 text-xs">{errors.copyId.message}</span>}
                        </fieldset>

                        <fieldset className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input {...register("email")} className="input" />
                            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                        </fieldset>

                        <fieldset className="flex flex-col gap-2">
                            <label htmlFor="dueDate">Due Date</label>
                            <input type="date" {...register("dueDate")} className="input" />
                            {errors.dueDate && <span className="text-red-500 text-xs">{errors.dueDate.message}</span>}
                        </fieldset>

                        <RequiredFieldsWarning />

                        <div className="flex justify-end">
                            <button type="submit" disabled={!isValid || isSubmitting} className="button-primary">
                                Issue Book {isSubmitting && <Spinner size="2" />}
                            </button>
                        </div>
                    </form>

                    <Dialog.Close asChild>
                        <button className="absolute top-3 right-3" aria-label="Close">
                            <CloseButton />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default IssueBookModal
