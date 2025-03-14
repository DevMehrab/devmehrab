import React from "react";
import catlify from "./assets/img/catlify.png";
import obsidian from "./assets/img/obsidian.png";
import password from "./assets/img/password.png";
import qoute from "./assets/img/qoute.png";
import run from "./assets/img/run.png";
import spacex from "./assets/img/spacex.png";
import student from "./assets/img/student.png";
import { ProjectCard } from "./ProjectCard";

let data = [
  {
    project_name: "Catlify",
    description:
      "A fun tool that generates unique cat names based on user preferences.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
    live_demo: "https://catlify.vercel.app/",
    github_repo: "",
    img: catlify,
  },
  {
    project_name: "Obsidian Chat Bot",
    description:
      "A simple chatbot that interacts with users and responds to common queries.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
    live_demo: "https://obsidian-bot-v2-d7edzzq5l-mehrab-hossains-projects.vercel.app",
    github_repo: "",
    img: obsidian,
  },
  {
    project_name: "Password Generator",
    description:
      "A secure password generator that allows users to customize length and complexity.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
    live_demo: "https://devmehrab.github.io/password-generator/",
    github_repo: "",
    img: password,
  },
  {
    project_name: "Quote Generator",
    description:
      "A web app that displays random motivational quotes with each refresh.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
    live_demo: "https://qoute-generator-c44jyg5pn-mehrab-hossains-projects.vercel.app/",
    github_repo: "",
    img: qoute,
  },
  {
    project_name: "Endless Run Game",
    description:
      "A simple endless runner game where users avoid obstacles and collect points.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
    live_demo: "https://devmehrab.github.io/endless-run/",
    github_repo: "",
    img: run,
  },
  {
    project_name: "SpaceX Website",
    description:
      "A frontend clone of the official SpaceX website with interactive animations.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
    live_demo: "https://devmehrab.github.io/SpaceX-2.0/",
    github_repo: "",
    img: spacex,
  },
  {
    project_name: "Student Info Manager",
    description:
      "A simple web app for managing student records, including name, age, and grade.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
    live_demo: "https://devmehrab.github.io/Student-Info/",
    github_repo: "",
    img: student,
  },
];

export const Projects = () => {
  let list = data.map((i) => (
    <ProjectCard
      img={i.img}
      name={i.project_name}
      description={i.description}
      techStack={i.tech_stack}
      liveLink={i.live_demo}
      repoLink={i.github_repo}
    />
  ));
  return (
    <div className="flex flex-col justify-start py-6 bg-zinc-900 w-screen p-4 max-w-4xl text-2xl text-zinc-200 mx-auto " id="projects">
      <h1 className="py-6 text-4xl">Projects</h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {list}
      </div>
    </div>
  );
};
