import React from 'react';
import './Experience.css';

const Experience = ({ visible }) => {
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

    if (!experiences || experiences.length === 0) {
        return <div>No experiences available.</div>;
    }

    return (
        <div id="experience" className={`experience h-screen flex flex-col space-y-4 ${visible ? 'visible' : ''}`}>
            <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
            <div className="timeline-container" style={{ position: 'relative', width: '100%' }}>
                <div className="timeline"></div>
                {experiences.map((exp, index) => (
                    <React.Fragment key={index}>
                        <div
                            className="timeline-marker"
                            style={{
                                left: `${(index + 1) * (100 / (experiences.length + 1))}%`,
                                animationDelay: `${(index + 1) * 2}s`
                            }}
                        ></div>
                        <div
                            className="timeline-content card"
                            style={{
                                left: `${(index + 1) * (100 / (experiences.length + 1))}%`,
                                animationDelay: `${(index + 1) * 2 + 1}s`
                            }}
                        >
                            <h3>{exp.title}</h3>
                            <p className="company">{exp.company.name}, {exp.company.location.city}, {exp.company.location.country}</p>
                            <p className="date">{exp.date.startMonth} {exp.date.startYear} - {exp.date.endMonth} {exp.date.endYear}</p>
                            <div className="description">
                                <h4>Responsibilities:</h4>
                                <ul>
                                    {exp.description.responsibilities.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                {exp.description.achievements && (
                                    <>
                                        <h4>Achievements:</h4>
                                        <ul>
                                            {exp.description.achievements.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                <h4>Technologies:</h4>
                                <ul>
                                    {exp.technologies.map((tech, idx) => (
                                        <li key={idx}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Experience;