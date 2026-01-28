// src/components/Careers.jsx
import careerImg from "../../public/assets/careers.png"; // adjust path accordingly

export default function Careers() {
    return (
        <section className="careers-section">
            <div className="container careers-container">
                <div className="careers-left">
                    <h2>
                        We welcome talented professionals who value expertise, collaboration, and trust.
                    </h2>
                    <p className="subtext">
                        Join us in delivering reliable, future-ready technology for our clients.
                    </p>
                </div>

                <div className="careers-right">
                    <div className="careers-card">
                        <img
                            src="/lanworks/public/assets/careers.png" // replace with your image path
                            alt="Professional in suit adjusting tie"
                            className="careers-image"
                        />
                        <div className="careers-info">
                            <h3>What You Can Expect</h3>
                            <ul>
                                <li>Join a passionate team of experts</li>
                                <li>Exciting projects</li>
                                <li>Flexible work conditions</li>
                            </ul>
                            <button className="btn-primary">Get in Touch</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
