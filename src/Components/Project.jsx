import React from "react";

function Project() {
  const projects = [
    {
      title: "First Project",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis error consequatur assumenda repudiandae suscipit voluptate nobis eius eaque labore sed pariatur officia.",
      img: "https://user-images.githubusercontent.com/16396664/146666086-28e88beb-c2f0-431f-adfb-2396d8f64c80.png",
      link: "#",
    },
    {
      title: "Second Project",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis error consequatur assumenda repudiandae suscipit voluptate nobis eius eaque labore sed pariatur officia.",
      img: "https://repository-images.githubusercontent.com/337150944/a51e8900-6aec-11eb-8c14-9119664dccda",
      link: "#",
    },
    {
      title: "Third Project",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis error consequatur assumenda repudiandae suscipit voluptate nobis eius eaque labore sed pariatur officia.",
      img: "https://www.datocms-assets.com/205/1640011361-react-ecommerce-tutorial.png?auto=format&h=500",
      link: "#",
    },
    {
      title: "Fourth Project",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis error consequatur assumenda repudiandae suscipit voluptate nobis eius eaque labore sed pariatur officia.",
      img: "https://cdn.dribbble.com/userupload/42599224/file/original-622eb65208f11be39cef3096a0b75635.png",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-900" id="Project">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">
          My <span className="text-indigo-500">Projects</span>
        </h1>
        <hr className="w-24 mx-auto mt-4 border-2 border-indigo-500 rounded" />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-6 md:px-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative group">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:brightness-90 transition-all duration-300"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-sky-400 mb-3">{project.title}</h2>
              <p className="text-gray-300 mb-4 text-justify">{project.description}</p>
              <a
                href={project.link}
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
