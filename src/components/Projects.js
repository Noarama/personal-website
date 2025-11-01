import React from "react";

const Projects = () => {
    const projects = [
        {
            name: "Statistical Analysis of Message Propagation of Low Earth Orbit Satellite Networks",
            description: "A research project exploring message propagaion in LEO satellite networks. ",
            tech: "Python",
            link: ""
        }
    ];

    return (
        <div>
            <div>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h2><strong>{project.name}</strong></h2>
                        <p>{project.description}</p>
                        <p><em>{project.tech}</em></p>
                        (project.link && (
                            <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            ></a>
                        ))
                    </div>
                ))}
            </div>
        </div>
    ); 

};

export default Projects;