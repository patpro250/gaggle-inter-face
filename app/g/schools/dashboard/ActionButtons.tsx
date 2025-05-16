"use client";
import AddBookButton from "./_components/AddBookButton";
import AddStudentButton from "./_components/AddStudentButton";
import AddBookCopyButton from "./_components/AddBookCopyButton";
import IssueBookButton from "./_components/IssueBookButton";

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-6 mb-4">
      <AddBookButton />
      <AddBookCopyButton />
      <AddStudentButton />
      <IssueBookButton />
    </div>
  );
};

export default ActionButtons;
