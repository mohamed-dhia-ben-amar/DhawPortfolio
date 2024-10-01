import React, { useState } from 'react';
import './MainMenu.css';

const MainMenu = ({ onExperienceClick }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const routes = {
        'Professional Experience': 'experience',
        'Projects': 'projects',
        'Contact Me': 'contact',
    };

    return (
        <div className="main-menu h-screen flex flex-col items-center justify-center space-y-4">
            <div className="menu-container">
                {['Professional Experience', 'Projects', 'Contact Me'].map((item, index) => (
                    <div key={index} className="menu-item-container">
                        <div className={`arrow ${hoveredIndex === index ? 'hovered' : ''}`}>➤</div>
                        <a
                            href={`#${routes[item]}`}
                            className="menu-item text-xl font-semibold"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={item === 'Professional Experience' ? onExperienceClick : null}
                        >
                            {item}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainMenu;