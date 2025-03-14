import React from "react";
import { Nav } from "./Nav";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center w-screen p-4 max-w-4xl mx-auto h-screen">
      <Nav />
      
      <h1 className="text-5xl font-medium bg-gradient-to-r from-teal-500 via-sky-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Crafting seamless user experiences.
      </h1>
      <p className="pt-6 text-2xl text-zinc-400">
      I excel at creating fast, responsive, and interactive web applications using modern technologies.
      </p>
      <div className="my-8">
        <button className="mr-4 cursor-pointer px-4 py-2 rounded text-zinc-900 bg-zinc-200">
          <a href="#projects">
          View Projects</a>
        </button>
        <button className="px-4 py-2 rounded cursor-pointer text-zinc-200 bg-zinc-900 border">
          Download CV
        </button>
      </div>
    </div>
  );
};
