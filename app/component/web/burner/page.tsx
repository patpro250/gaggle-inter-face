import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className=" min-h-[400px] bg-gradient-to-r  from-blue-50 to-white  py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900  mb-6 leading-tight">
            Modern Library <span className="text-indigo-600">Management</span>{" "}
            <br /> for a Brighter Rwanda
          </h1>
          <p className="text-md leading-7 text-gray-700  mb-8">
            Niti Book is leading a reading revolution — equipping Rwandan
            schools and institutions with powerful tools to manage libraries,
            improve reading skills, and bring technology to every corner of the
            learning experience.
          </p>
          <Link
            href="../../../d/auth12/s"
            className="inline-block border-2 text-sm border-gray-200 bg-indigo-400 hover:bg-indigo-300 text-gray-700 font-normal py-2 px-6 rounded-md  transition"
          >
            Get Started
          </Link>
        </div>

        {/* Right: Optional Image or Video */}
        <div className="relative aspect-video max-w-xl max-h-[400px] rounded-xl overflow-hidden shadow-lg">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/burner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
