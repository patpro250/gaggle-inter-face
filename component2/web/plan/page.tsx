const plans = [
  {
    name: "Free",
    price: "0 RWF/month",
    features: [
      "Add up to 1,000 books",
      "Limited circulations: 300 transactions",
      "Basic reports and analytics",
      "1 Librarian",
      "Manage a single library",
      "Basic librarian tools",
      "Community-based support only",
    ],
    highlight: false,
  },
  {
    name: "Plus",
    price: "5,000 RWf/month",
    features: [
      "Add up to 5,000 books",
      "Unlimited circulations",
      "Advanced analytics",
      "3 Librarians",
      "Advanced librarian tools",
      "Advanced reporting features",
      "Email-only support",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "10,000 RWF/month",
    features: [
      "Library Branches",
      "Inter-Library",
      "Reservations",
      "Access Control",
      "Custom Branding",
      "Book Code Generation",
      "Priority support",
    ],
    highlight: false,
  },
];

const PlansSection = () => {
  return (
    <section className="bg-gray-50  py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
          Choose the <span className="text-indigo-600">Right Plan</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Flexible pricing options built for schools, libraries, and large
          institutions in Rwanda.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl shadow-lg transition bg-white ${
              plan.highlight ? "border-2 border-blue-600 scale-[1.03]" : ""
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900  mb-2">
              {plan.name}
            </h3>
            <p className="text-2xl font-semibold text-blue-600 mb-4">
              {plan.price}
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 0 0-1.414 0L9 11.586 6.707 9.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 0-1.414Z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              {plan.name === "Institution" ? "Contact Us" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
