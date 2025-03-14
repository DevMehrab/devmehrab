import React from "react";

export const SkillCard = ({ logo, experience, name }) => {
  return (
    <div className="flex justify-start items-center py-4">
      <p className="mr-4 bg-zinc-800 p-4 rounded text-2xl">{logo}</p>
      <div>
        <h2>{name}</h2>
        <p className="text-zinc-600 text-base">{experience}</p>
      </div>
    </div>
  );
};
