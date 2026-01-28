import React, { useState } from "react";
import "./ContactUs.css";
import { FiMail, FiUser, FiPhone } from "react-icons/fi";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        // Here you can later integrate your API or email handler
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="contact-page">
            {/* HERO */}
            <section className="contact-hero">
                <div className="contact-hero-inner">
                    <h1>Contact Us</h1>
                    <p className="contact-subtitle">
                        Have a question or want to discuss a project? We’re here to help.
                    </p>
                </div>
            </section>

            {/* FORM SECTION */}
            <section className="contact-form-section">
                <div className="contact-container">
                    {submitted && (
                        <div className="contact-success">
                            Thank you! Your message has been submitted.
                        </div>
                    )}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <div className="input-icon">
                                    <FiUser />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-icon">
                                    <FiMail />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Subject"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        <button type="submit" className="contact-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
