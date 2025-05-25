const Hero = () => {
  return (
    <section className="relative text-white py-24 overflow-hidden" id="hero">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:animate-gradient before:bg-[radial-gradient(#444444_2px,transparent_1px)] before:bg-[size:20px_20px] before:opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Empower Your Campus Voice with <span className="text-blue-500">CampusConnect</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Raise issues that matter. Upvote what matters to you. Stay informed about college events. 
          CampusConnect is your go-to platform for making student governance transparent and impactful.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#issues"
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </a>
          <a
            href="#events"
            className="border border-blue-600 text-blue-500 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Explore Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
