import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import MainMenu from './components/MainMenu';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SectionIndicators from './components/SectionIndicators';
import GoToTopButton from './components/GoToTopButton';
import './App.css';

const App = () => {
    const [loaded, setLoaded] = useState(false);
    const [experienceVisible, setExperienceVisible] = useState(false);
    const [projectsLoaded, setProjectsLoaded] = useState(false);
    const [contactLoaded, setContactLoaded] = useState(false);

    const handleLoaded = () => {
        setLoaded(true);
    };

    const handleExperienceClick = () => {
        setExperienceVisible(true);
    };

    const handleProjectsLoaded = () => {
        setProjectsLoaded(true);
    };

    const handleContactLoaded = () => {
        setContactLoaded(true);
    };

    return (
        <div>
            {!loaded ? (
                <Welcome onLoaded={handleLoaded} />
            ) : (
                <>
                    <SectionIndicators />
                    <GoToTopButton />
                    <MainMenu onExperienceClick={handleExperienceClick} />
                    <section id="experience">
                        <Experience visible={experienceVisible} />
                    </section>
                    <section id="projects">
                        <Projects onLoaded={handleProjectsLoaded} />
                    </section>
                    <section id="contact">
                        <Contact onLoaded={handleContactLoaded} />
                    </section>
                </>
            )}
        </div>
    );
};

export default App;