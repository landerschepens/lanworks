import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h3>Committed to excel</h3>
                    <a href="mailto:services@lanworks.be" className="footer-link button">
                        <FiMail size={18}/> services@lanworks.be
                    </a>
                </div>

                <div className="footer-center">
                    <p>We are a team of passionate people committed to excel and deliver secure, reliable, and
                        future-ready IT through long-term partnerships.</p>
                    <a href="tel:+3258690911" className="footer-link button">
                        <FiPhone size={18}/> +32 (0)58 690 911
                    </a>
                </div>

                <div className="footer-right">
                    <button className="btn-primary footer-btn">Get in touch</button>
                    <div className="footer-socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <a href="#" className="footer-link small-link">Cookie Policy</a>
                <span>Copyright © Lanworks BV</span>
            </div>
        </footer>
    );
}
