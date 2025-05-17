import { Share, ArrowRight, RefreshCw } from "lucide-react";
import IssueBookButton from "../dashboard/_components/IssueBookButton";
import ReturnBookButton from "../dashboard/_components/ReturnBookButton";

const buttonData = [
    { icon: <Share className="w-5 h-5" strokeWidth={1.5} />, label: "Lend Book" },
    { icon: <ArrowRight className="w-5 h-5" strokeWidth={1.5} />, label: "Return Book" },
    { icon: <RefreshCw className="w-5 h-5" strokeWidth={1.5} />, label: "Renew Book" },
];

const CirculationsActions = () => {
    return (
        <div className="flex flex-wrap gap-6 mb-4">
            <IssueBookButton />
            <ReturnBookButton />
        </div>
    );
};

export default CirculationsActions;
