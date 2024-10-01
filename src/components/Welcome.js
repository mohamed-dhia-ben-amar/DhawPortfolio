import React, { useEffect } from 'react';
import './Welcome.css'; // Import the CSS file for animations

const Welcome = ({ onLoaded }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoaded();
        }, 5000); // Adjust the duration of the loading animation (3 seconds here)

        return () => {
            clearTimeout(timer);
        }; // Cleanup the timer
    }, [onLoaded]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <svg viewBox="0 0 1000 200" className="welcome-svg">
                <rect x="50" y="50" width="900" height="100" className="welcome-rect" />
                <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle" className="welcome-text">
                    Welcome to My Portfolio!
                </text>
            </svg>
        </div>
    );
};

export default Welcome;