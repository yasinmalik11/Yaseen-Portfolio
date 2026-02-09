const Chtp = () => {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition"
          >
            <div className="h-40 bg-gray-700 rounded mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
            <p className="text-gray-400">
              Short description of the project.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chtp;
