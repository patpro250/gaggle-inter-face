import { Book, Search, PlusCircle, Trash, Edit } from "lucide-react";

const buttonData = [
  { icon: <PlusCircle className="w-5 h-5" />, label: "Add Book" },
  { icon: <PlusCircle className="w-5 h-5" />, label: "Add book copy" },
  { icon: <Search className="w-5 h-5" />, label: "Find book" },
];

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-6 mb-4">
      {buttonData.map((button, index) => (
        <button
          key={index}
          className="flex items-center px-4 py-2 rounded-lg bg-primary text-white shadow-md transition-all duration-300 ease-in-out hover:bg-primary/80 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          {button.icon}
          <span className="ml-2">{button.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;
