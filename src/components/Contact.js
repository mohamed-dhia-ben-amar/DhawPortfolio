import React, { useEffect, useState } from 'react';
import './Contact.css';
import { FaUser, FaEnvelope, FaTag, FaCommentDots } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = ({ onLoaded }) => {
    useEffect(() => {
        onLoaded();
    }, [onLoaded]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.subject) newErrors.subject = 'Subject is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again later.');
            });

        e.target.reset();
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        setErrors({});
    };

    return (
        <div id="contact" className="contact h-screen flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="form-input">
                    <FaUser className="icon" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-input">
                    <FaEnvelope className="icon" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-input">
                    <FaTag className="icon" />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    {errors.subject && <span className="error">{errors.subject}</span>}
                </div>
                <div className="form-input">
                    <FaCommentDots className="icon" />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit" className="form-button">Send</button>
            </form>
        </div>
    );
};

export default Contact;