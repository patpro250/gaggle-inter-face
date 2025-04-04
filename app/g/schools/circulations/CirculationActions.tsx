import { Share, ArrowRight, RefreshCw } from "lucide-react";

const buttonData = [
    { icon: <Share className="w-5 h-5" strokeWidth={1.5} />, label: "Lend Book" },
    { icon: <ArrowRight className="w-5 h-5" strokeWidth={1.5} />, label: "Return Book" },
    { icon: <RefreshCw className="w-5 h-5" strokeWidth={1.5} />, label: "Renew Book" },
];

const CirculationsActions = () => {
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

export default CirculationsActions;
