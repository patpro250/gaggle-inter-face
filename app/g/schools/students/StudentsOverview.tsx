import { Users, UserCheck, UserX, FileText, DollarSign, AlertCircle } from "lucide-react";

const studentsStats = {
    totalStudents: "3,500",  // Total number of students
    activeStudents: "3,200",  // Active students
    inactiveStudents: "300",  // Inactive students
    studentsWithOverdueBooks: "100",  // Students with overdue books
    studentsWithFines: "50",  // Students with fines
    totalFines: "$500",  // Total fines amount
    studentsWhoLostBooks: "5",  // Students who lost books
};

const stats = [
    {
        title: "Total Students",
        value: studentsStats.totalStudents,
        icon: <Users className="text-blue-500" />,
    },
    {
        title: "Active Students",
        value: studentsStats.activeStudents,
        icon: <UserCheck className="text-green-500" />,
    },
    {
        title: "Inactive Students",
        value: studentsStats.inactiveStudents,
        icon: <UserX className="text-red-500" />,
    },
    {
        title: "Students with Overdue Books",
        value: studentsStats.studentsWithOverdueBooks,
        icon: <FileText className="text-yellow-500" />,
    },
    {
        title: "Students with Fines",
        value: studentsStats.studentsWithFines,
        icon: <DollarSign className="text-gray-500" />,
    },
    {
        title: "Total Fines",
        value: studentsStats.totalFines,
        icon: <DollarSign className="text-red-500" />,
    },
    {
        title: "Students Who Lost Books",
        value: studentsStats.studentsWhoLostBooks,
        icon: <AlertCircle className="text-red-600" />,
    },
];

const StudentsOverview = () => {
    return (
        <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="flex items-center p-4 bg-white dark:bg-gray-800 shadow-md rounded-2xl"
                >
                    <div className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                        {stat.icon}
                    </div>
                    <div className="ml-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {stat.title}
                        </p>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                            {stat.value}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StudentsOverview;
