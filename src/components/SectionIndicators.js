import React, { useEffect, useState } from 'react';
import './SectionIndicators.css';

const SectionIndicators = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 50) {
                    currentSection = section.getAttribute('id');
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (section) => {
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="section-indicators z-10">
            {['experience', 'projects', 'contact'].map(section => (
                <div
                    key={section}
                    className={`indicator ${activeSection === section ? 'active' : ''}`}
                    onClick={() => handleClick(section)}
                ></div>
            ))}
        </div>
    );
};

export default SectionIndicators;