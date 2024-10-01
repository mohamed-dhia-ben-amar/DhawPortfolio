import React, { useEffect } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt, FaGamepad, FaFileAlt, FaLaptopCode, FaServer } from 'react-icons/fa';

const projects = [
    {
        title: "Multiplatform Media Player Mobile App",
        frontend: "Kotlin, Swift",
        backend: "Node Express",
        db: "MongoDB",
        gitUrls: {
            swift: "https://github.com/MayssaMejri-MohamedDhiaBenAmar/PurplePlay_FrontEnd",
            kotlin: "https://github.com/MayssaMejri-MohamedDhiaBenAmar/PurPlePlay_android/tree/Mayssa",
            backend: "https://github.com/MayssaMejri-MohamedDhiaBenAmar/PurplePlay_BackEnd/tree/main"
        },
        icon: <FaMobileAlt className="icon" />
    },
    {
        title: "AI Generated Coding Game",
        frontend: "Flutter",
        backend: "Node Express",
        db: "MongoDB",
        gitUrls: {
            frontend: "https://github.com/ErrorByNightt/FrontEnd/tree/Integration",
            backend: "https://github.com/ErrorByNightt/BackEnd"
        },
        icon: <FaGamepad className="icon" />
    },
    {
        title: "Graduation Project Report",
        frontend: "LaTeX",
        gitUrl: "https://github.com/mohamed-dhia-ben-amar/RapportPFEByDhia",
        icon: <FaFileAlt className="icon" />
    },
    {
        title: "Personal Portfolio",
        frontend: "React, Tailwind CSS",
        gitUrl: "https://github.com/mohamed-dhia-ben-amar/DhawPortfolio",
        icon: <FaLaptopCode className="icon" />
    },
    {
        title: "Resources Manager Platform Backend",
        backend: "Spring Boot",
        db: "MongoDB",
        gitUrl: "https://github.com/mohamed-dhia-ben-amar/Salary-Manager-Backend",
        icon: <FaServer className="icon" />
    },
    {
        title: "Blogging Website Backend",
        backend: "Node Express",
        db: "MongoDB",
        gitUrl: "https://github.com/mohamed-dhia-ben-amar/DhawBloggingBackend",
        icon: <FaNodeJs className="icon" />
    }
];

const Projects = ({ onLoaded }) => {
    useEffect(() => {
        onLoaded();
    }, [onLoaded]);

    return (
        <div id="projects" className="projects h-screen flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-8" style={{color: "goldenrod"}}>Projects</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        {project.icon}
                        <h3 style={{color: "gold"}}>{project.title}</h3>
                        {project.frontend && <p><strong>Frontend:</strong> {project.frontend}</p>}
                        {project.backend && <p><strong>Backend:</strong> {project.backend}</p>}
                        {project.db && <p><strong>DB:</strong> {project.db}</p>}
                        <div className="details">
                            {project.gitUrls ? (
                                <div>
                                    {project.gitUrls.swift && <a href={project.gitUrls.swift} target="_blank" rel="noopener noreferrer">Swift Frontend</a>}
                                    {project.gitUrls.kotlin && <a href={project.gitUrls.kotlin} target="_blank" rel="noopener noreferrer">Kotlin Frontend</a>}
                                    {project.gitUrls.backend && <a href={project.gitUrls.backend} target="_blank" rel="noopener noreferrer">Backend</a>}
                                </div>
                            ) : (
                                <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">GitHub URL</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;