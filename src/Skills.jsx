import React from "react";
import { SkillCard } from "./SkillCard";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

let data = [
  {
    name: "HTML",
    experience: "3 Years Experience",
    logo: <FaHtml5 />,
  },
  {
    name: "CSS",
    experience: "3 Years Experience",
    logo: <IoLogoCss3 />,
  },
  {
    name: "JavaScript",
    experience: "2 Years Experience",
    logo: <FaJsSquare />,
  },
  {
    name: "React",
    experience: "1 Years Experience",
    logo: <FaReact />,
  },
  {
    name: "Tailwind",
    experience: "1 Years Experience",
    logo: <RiTailwindCssFill />,
  },
  {
    name: "Bootstrap",
    experience: "2 Years Experience",
    logo: <FaBootstrap />,
  },
  {
    name: "Git",
    experience: "3 Years Experience",
    logo: <FaGitAlt />,
  },
  {
    name: "GitHub",
    experience: "3 Years Experience",
    logo: <FaGithub />,
  },
];

export const Skills = () => {
  const list = data.map((card) => (
    <SkillCard logo={card.logo} name={card.name} experience={card.experience}/>
  ));
  return (
    <div className="flex flex-col justify-start py-6 bg-zinc-900 w-screen p-4 max-w-4xl text-2xl text-zinc-200 mx-auto ">
      <h1 className="py-6 text-3xl">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">{list}</div>
    </div>
  );
};
