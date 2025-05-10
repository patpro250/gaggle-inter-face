import AddBookButton from "./_components/AddBookButton";
import AddStudentButton from "./_components/AddStudentButton";
import AddBookCopyButton from "./_components/AddBookCopyButton";

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-6 mb-4">
      <AddBookButton />
      <AddBookCopyButton />
      <AddStudentButton />
    </div>
  );
};

export default ActionButtons;
