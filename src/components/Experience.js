import React, { useState } from 'react';
import './Experience.css';

const Experience = ({ visible }) => {
    const [selectedExperience, setSelectedExperience] = useState(null);

    const experiences = [
        {
            date: {
                startMonth: 'February',
                startYear: 2024,
                endMonth: 'August',
                endYear: 2024
            },
            title: 'Full-Stack Engineer Intern',
            company: {
                name: 'Converty',
                location: {
                    city: 'Tunis',
                    country: 'Tunisia'
                }
            },
            description: {
                responsibilities: [
                    'Developed and optimized an ECommerce dashboard, focusing on performance enhancements and new feature implementations.',
                    'Reduced loading times by 30% by optimizing frontend codebase.',
                    'Implemented a cross-sell feature that increased average order value by 15%.',
                    'Led the mobile application feature completion, ensuring smooth integration with the backend.'
                ]
            },
            technologies: [
                'React.js', 'Node.js', 'MongoDB', 'Docker'
            ]
        },
        {
            date: {
                startMonth: 'July',
                startYear: 2023,
                endMonth: 'September',
                endYear: 2023
            },
            title: 'Software Engineer Intern',
            company: {
                name: 'IBSpace',
                location: {
                    city: 'Tunis',
                    country: 'Tunisia'
                }
            },
            description: {
                responsibilities: [
                    'Contributed to the development of a social networking platform, focusing on database management and an admin dashboard.',
                    'Designed and maintained a scalable database architecture using Firebase.',
                    'Developed and integrated Angular-based dashboards for user management and analytics.'
                ]
            },
            technologies: [
                'Angular', 'Firebase', 'TypeScript', 'Git'
            ]
        },
        {
            date: {
                startMonth: 'August',
                startYear: 2022,
                endMonth: 'September',
                endYear: 2022
            },
            title: 'Front-End Mobile Developer',
            company: {
                name: 'Inoteqia',
                location: {
                    city: 'Tunis',
                    country: 'Tunisia'
                }
            },
            description: {
                responsibilities: [
                    'Developed a decentralized mobile application (DApp) for vehicle trading using Flutter and Solidity.',
                    'Implemented smart contracts for secure and transparent transactions.',
                    'Created a responsive and user-friendly mobile interface using Flutter.'
                ]
            },
            technologies: [
                'Flutter', 'Solidity', 'Blockchain', 'Web3.js'
            ]
        }
    ];

    const handleViewMore = (experience) => {
        setSelectedExperience(experience);
    };

    const handleClosePopup = () => {
        setSelectedExperience(null);
    };

    return (
        <div id="experience" className={`experience h-screen flex items-center justify-center ${visible ? 'visible' : ''}`}>
            <div className="experience-content">
                <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
                <ul className="experience-list">
                    {experiences.map((exp, index) => (
                        <li key={index} className="experience-item">
                            <span>{exp.title}</span>
                            <span className="dots">....................................</span>
                            <button className="view-more-button" onClick={() => handleViewMore(exp)}>
                                View More
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {selectedExperience && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-button" onClick={handleClosePopup}>X</button>
                        <h3>{selectedExperience.title}</h3>
                        <p className="company">{selectedExperience.company.name}, {selectedExperience.company.location.city}, {selectedExperience.company.location.country}</p>
                        <p className="date">{selectedExperience.date.startMonth} {selectedExperience.date.startYear} - {selectedExperience.date.endMonth} {selectedExperience.date.endYear}</p>
                        <div className="description">
                            <h4>Responsibilities:</h4>
                            <ul>
                                {selectedExperience.description.responsibilities.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <h4>Technologies:</h4>
                            <ul>
                                {selectedExperience.technologies.map((tech, idx) => (
                                    <li key={idx}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Experience;