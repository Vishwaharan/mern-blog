import React from "react";

const projects = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/blog-915eb.appspot.com/o/assets%2Fbluetooth.png?alt=media&token=620cb920-b6e1-4de7-bb0c-687686bf84bd", // Update with the correct image path
    title: "Bluetooth Attendance System",
    description:
      "An attendance system that uses Bluetooth and fingerprint verification for secure tracking.",
    techStack: "Flutter, Firebase",
    githubLink:
      "https://github.com/Vishwaharan/Bluetooth-Attendance-System-Teacher-App",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/blog-915eb.appspot.com/o/assets%2Fnetflix.png?alt=media&token=7d2466cb-f3cf-423c-ad56-79ee14efc5bb", // Update with the correct image path
    title: "Netflix Clone",
    description:
      "A clone of Netflix with a beautiful UI for streaming movies and series, built using React.",
    techStack: "React, Firebase",
    githubLink: "https://github.com/Vishwaharan/Netflix-Clone",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/blog-915eb.appspot.com/o/assets%2Femp.png?alt=media&token=d304c24b-143a-4595-a461-bab5d0b5c24c", // Update with the correct image path
    title: "Employee API",
    description:
      "An API to manage employee records, built with Spring Boot, React, and SQL.",
    techStack: "Spring Boot, React, SQL",
    githubLink: "https://github.com/Vishwaharan/Employee-API",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-20 px-5 flex flex-col items-center">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-lg text-gray-600">
          Some projects I've worked on to improve my skills.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative w-full border border-teal-500 hover:border-2 h-[470px] overflow-hidden rounded-lg transition-all"
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-[280px] w-full transition-all duration-300 z-20"
              />
            </a>
            <div className="p-3 flex flex-col gap-2 h-[180px]">
              <p className="text-lg font-semibold line-clamp-2">
                {project.title}
              </p>
              <p className="text-sm text-gray-400 line-clamp-3">
                {project.description}
              </p>
              <span className="italic text-sm mt-2 mb-2">
                {project.techStack}
              </span>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 group-hover:bottom-0 absolute bottom-[-50px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
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
