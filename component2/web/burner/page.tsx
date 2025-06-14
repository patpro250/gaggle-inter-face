import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-50/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-indigo-100/20 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">

            <span className="text-indigo-600">Niti Book</span><br/>
            Modern Library Systems <br />
            <span className="text-indigo-600">Built for Rwanda</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            NITIBOOK combines affordable pricing with enterprise-grade
            technology to transform how libraries operate across Rwanda.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="../../../d/auth12/s"
              className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
            >
              Get started
            </Link>
            <Link
              href="#"
              className="text-sm font-medium leading-6 text-gray-900 hover:text-indigo-500 transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
