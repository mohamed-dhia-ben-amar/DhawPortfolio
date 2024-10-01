import React from 'react';
import './Projects.css';

const Projects = () => (
    <div id="projects" className="projects h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="project-cards">
            <div className="project-card">Project 1</div>
            <div className="project-card">Project 2</div>
            <div className="project-card">Project 3</div>
        </div>
    </div>
);

export default Projects;