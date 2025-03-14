import React from "react";

export const ProjectCard = ({
    img,
    name,
    description,
    techStack,
    liveLink,
}) => {
    return (
        <div className="my-8">
            <a href={liveLink}><img src={img} alt="" className="rounded" />
                <h3 className="my-2">{name}</h3>
                <p className="text-sm my-2 text-zinc-500">{description}</p>
                <p className="flex my-4">
                    {techStack.map((i) => (
                        <span className="bg-zinc-700 p-2 px-4 text-sm mr-2 rounded-4xl">{i}</span>
                    ))}
                </p></a>

        </div>
    );
};
