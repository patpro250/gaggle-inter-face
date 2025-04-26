const CallToAction = () => {
  return (
    <section className="bg-indigo-50 text-gray-700 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform{" "}
          <span className="text-indigo-600">Your Library?</span>
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          Join schools and institutions across Rwanda already using Gaggle Nit
          to modernize and improve their libraries.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/signup"
            className="bg-transparent text-md flex items-center justify-center border-2 border-white text-gray-700 font-normal py-1 px-4 rounded-md hover:bg-white hover:text-indigo-600 transition"
          >
            Get Started Free
          </a>
          <a
            href="/contact"
            className="border border-white py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
