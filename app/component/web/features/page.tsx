import {
  BookOpen,
  BarChart,
  LayoutDashboard,
  Lock,
  Layers,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: "Smart Book Tracking",
    desc: "Track borrowed books, due dates, and returns automatically with ease.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-blue-600" />,
    title: "Librarian Dashboard",
    desc: "Control library activity with intuitive tools for inventory and reader management.",
  },
  {
    icon: <BarChart className="w-6 h-6 text-blue-600" />,
    title: "Reading Analytics",
    desc: "Gain insights into reading patterns and library usage by students.",
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-600" />,
    title: "Multi-Library Support",
    desc: "Manage several school or institution libraries from a single account.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Reading Skill Tools",
    desc: "Support readers with digital tools to improve literacy and engagement.",
  },
  {
    icon: <Lock className="w-6 h-6 text-blue-600" />,
    title: "Cloud-Based & Secure",
    desc: "Your data is safe, encrypted, and accessible from anywhere at any time.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white  py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
          <span className="text-indigo-600">Powerful Tools for</span> Smarter
          Libraries
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Gaggle Nit brings together innovation and usability to help Rwandan
          libraries lead in digital transformation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-gray-50  p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800  mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 ">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
