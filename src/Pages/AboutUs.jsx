import React from "react";
import "./AboutUs.css";
import { FiTarget, FiTrendingUp, FiUsers, FiShield } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
            Built on expertise. Driven by people. Trusted by clients.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="about-content">
        <div className="about-container">
          {/* Intro Cards */}
          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-icon">
                <FiTrendingUp />
              </div>
              <h3>Enhance Your Expertise</h3>
              <p>
                With over <strong>25 years of experience</strong>, we specialize
                in designing, building, and supporting modern IT infrastructure
                and cloud solutions for mid-sized and large enterprises.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <FiUsers />
              </div>
              <h3>People First</h3>
              <p>
                We invest in what truly matters — <strong>our people</strong> and
                their knowledge. Rather than focusing on marketing, we focus on
                excellence.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <FiShield />
              </div>
              <h3>Trusted Partnerships</h3>
              <p>
                Clients are at the heart of our business. We build long-standing
                partnerships based on <strong>trust</strong>, respect, and shared
                goals.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <FiTarget />
              </div>
              <h3>Always Evolving</h3>
              <p>
                We’re growing, building, and always evolving — driven by passion,
                grounded in experience, and committed to your success.
              </p>
            </div>
          </div>

          {/* Main Text */}
          <div className="about-text">
            <h2>Discover New Possibilities</h2>
            <p>
              We offer a comprehensive range of IT consultancy and managed
              services designed to help businesses optimize their technology
              infrastructure. Our team of experts works closely with clients to
              tailor solutions that enhance efficiency, security, and
              scalability.
            </p>

            <div className="about-highlight">
              <p>
                <strong>Start with the client</strong> – understand their needs
                and provide tailored solutions that exceed expectations.
              </p>
            </div>
          </div>

          {/* Founders */}
          <div className="about-founders">
            <div className="founders-header">
              <h2>Meet Our Founders</h2>
              <p>Committed to our clients&apos; success</p>
            </div>

            <div className="founders-grid">
              {/* Founder 1 */}
              <div className="founder-card">
                <div className="founder-avatar">
                  <FaRegUserCircle />
                </div>
                <div className="founder-info">
                  <h3>Sven Schepens</h3>
                  <p className="founder-role">Chief Executive Officer</p>
                  <p className="founder-description">
                    As the founder and chief strategist, Sven drives the vision
                    of our consultancy. He is deeply involved in shaping our IT
                    solutions, service delivery, and client engagement
                    strategies. With a passion for technology, he drives
                    innovation and excellence across all areas of the business.
                    He combines strategic vision with a hands-on approach,
                    ensuring that every project is delivered to the highest
                    possible standards and expectations. Sven’s leadership
                    inspires a culture of discipline, integrity, and continuous
                    improvement, positioning the company as a trusted partner in
                    delivering high-quality, technology-driven solutions.
                  </p>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="founder-card">
                <div className="founder-avatar">
                  <FaRegUserCircle />
                </div>
                <div className="founder-info">
                  <h3>Dominique De Caluwe</h3>
                  <p className="founder-role">Chief Financial Officer</p>
                  <p className="founder-description">
                    Dominique oversees all financial operations, ensuring
                    strategic growth, fiscal stability, and operational
                    efficiency. With a strong background in corporate finance
                    and technology-driven businesses, she plays a key role in
                    aligning financial strategy with the company’s innovation
                    goals, supporting data-driven decisions that drive
                    sustainable profitability and client value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Spacer */}
          <div className="about-footer-space" />
        </div>
      </section>
    </div>
  );
}
