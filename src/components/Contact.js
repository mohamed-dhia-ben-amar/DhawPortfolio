import React from 'react';
import './Contact.css';

const Contact = () => (
    <div id="contact" className="contact h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <form className="contact-form">
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <textarea placeholder="Message" className="form-input" rows="5"></textarea>
            <button type="submit" className="form-button">Send</button>
        </form>
    </div>
);

export default Contact;