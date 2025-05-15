const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50  py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 ">
          <span className="text-indigo-600">Real Impact</span> Across Rwanda
        </h2>
        <p className="text-gray-600  mt-4 max-w-2xl mx-auto">
          Niti Book is empowering schools and libraries with better tools,
          smarter systems, and a brighter future for reading.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto mb-20">
        <div>
          <p className="text-4xl font-extrabold text-blue-600">35+</p>
          <p className="mt-2 text-gray-700 ">Libraries Transformed</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-blue-600">10,000+</p>
          <p className="mt-2 text-gray-700 ">Books Tracked</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-blue-600">6,500+</p>
          <p className="mt-2 text-gray-700 ">Students Impacted</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            name: "Director Jean M.",
            role: "School Director – Kigali",
            text: "Niti Book completely changed the way our library works. Managing books and tracking students is now effortless.",
          },
          {
            name: "Librarian Aline U.",
            role: "Community Librarian",
            text: "Before Niti Book, everything was manual. Now we’ve saved hours every week and our readers are more engaged.",
          },
          {
            name: "Emmanuel K.",
            role: "Student – Huye District",
            text: "I finally enjoy using the library! It's easy to find books and track what I’ve read. It feels like real tech.",
          },
        ].map((t, i) => (
          <div key={i} className="bg-white  shadow rounded-xl p-6">
            <p className="text-gray-600  italic">“{t.text}”</p>
            <div className="mt-4 text-sm text-gray-800  font-semibold">
              {t.name}
            </div>
            <div className="text-xs text-gray-500 ">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
