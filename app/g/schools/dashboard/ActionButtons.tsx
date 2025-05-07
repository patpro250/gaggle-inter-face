import { Search, PlusCircle } from "lucide-react";
import AddBookButton from "./_components/AddBookButton";
import AddStudentButton from "./_components/AddStudentButton";

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-6 mb-4">

      <AddBookButton />
      <button className="flex items-center px-4 py-2 rounded-lg bg-primary text-white shadow-md transition-all duration-300 ease-in-out hover:bg-primary/80 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50">
        <PlusCircle className="w-5 h-5" />
        <span className="ml-2">Add book copy</span>
      </button>
      <AddStudentButton />
    </div>
  );
};

export default ActionButtons;
