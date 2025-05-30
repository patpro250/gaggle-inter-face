const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for getting started.",
    features: ["1 Project", "Community Support", "Limited Assets"],
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "$29/month",
    description: "For serious designers and freelancers.",
    features: [
      "10 Projects",
      "Premium Assets",
      "Email Support",
      "Export Options",
      "Advanced Layout Tools",
    ],
    cta: "Buy Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for teams and agencies.",
    features: [
      "Unlimited Projects",
      "Dedicated Support",
      "Team Collaboration",
      "Custom Branding",
      "Priority Updates",
      "Account Manager",
    ],
    cta: "Contact Sales",
  },
];

function DesignerPaymentPlans() {
  return (
    <div className="bg-white py-16 px-6 lg:px-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Designer Plans</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Choose a plan that fits your creative process and grow your design
          work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="flex flex-col justify-between h-full border rounded-2xl shadow-xl p-6 transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {plan.name}
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-[#6C5DD3]">
                {plan.price}
              </p>
              <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
              <ul className="mt-5 space-y-2 text-gray-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-[#6C5DD3] mr-2 mt-1">✔️</span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="bg-[#6C5DD3] text-white px-6 py-2 rounded-xl shadow hover:bg-[#5b4ac2] transition">
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignerPaymentPlans;
