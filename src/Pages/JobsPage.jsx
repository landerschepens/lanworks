import React, { useState } from "react";
import "./JobsPage.css";

export default function JobsPage() {
    // Example job data (for now visible, later you can comment/remove)
    const [jobs] = useState([
        {
            id: 1,
            title: "Cloud Security Consultant",
            location: "Brussels, Belgium",
            type: "Full-time",
            description:
                "As a Cloud Security Consultant, you will design and implement security solutions for cloud environments. You will work closely with clients to ensure their platforms are secure, compliant, and scalable.",
        },
        // Add more job objects here
    ]);

    return (
        <div className="jobs-page">
            {/* HERO */}
            <section className="jobs-hero">
                <div className="jobs-hero-inner">
                    <h1>Our Job Offers</h1>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="jobs-search"
                    />
                </div>
            </section>

            {/* JOB LIST */}
            <section className="jobs-list-section">
                <div className="jobs-container">
                    {jobs.length === 0 ? (
                        <p className="no-jobs">
                            There are currently no open job opportunities, but feel free to
                            contact us for a spontaneous application.
                        </p>
                    ) : (
                        <div className="jobs-grid">
                            {jobs.map((job) => (
                                <div key={job.id} className="job-card">
                                    <h3>{job.title}</h3>
                                    <p className="job-meta">
                                        {job.location} • {job.type}
                                    </p>
                                    <p>{job.description}</p>
                                    <button className="apply-btn">Apply Now</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
