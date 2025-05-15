const BrandVideoCard = () => {
  return (
    <section className="  px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Video */}
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/coll-brand.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800  mb-4">
            Transforming Libraries Across Rwanda with Niti Book
          </h2>
          <p className="text-gray-600  mb-6">
            Niti Book is reimagining how libraries work — bringing smart
            technology, better management tools, and a renewed focus on reading
            skills to institutions across Rwanda. We're building a future where
            every reader has access to knowledge, and every library becomes a
            center of innovation.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-0 border-2 border-gray-200  text--gray-700 font-normal py-1 px-5 rounded-md transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandVideoCard;
