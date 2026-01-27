// src/components/Values.jsx
import {FiCode, FiShield, FiSettings, FiUsers, FiZap} from "react-icons/fi";

const values = [
    {
        title: "Software Development Excellence",
        description:
            "We prioritize developing clean, efficient software, ensuring scalable and high-performance solutions that adhere to industry best practices.",
        icon: <FiCode />
    },
    {
        title: "Security and Compliance by Design",
        description:
            "Security is embedded into everything we do. We implement robust, end-to-end IT solutions that protect your data, support compliance requirements, and strengthen the resilience of your digital environment.",
        icon: <FiShield />
    },
    {
        title: "Technology decisions guided by experience and insight",
        description:
            "We help organizations make informed, pragmatic IT decisions aligned with their business goals. Our consulting services provide clarity, structure, and direction—turning complex challenges into actionable roadmaps that support long-term success.",
        icon: <FiZap />
    },
    {
        title: "Reliable operations you can depend on",
        description:
            "Our managed services ensure your IT environments remain secure, resilient, and continuously optimized. We take responsibility for day-to-day operations, allowing your teams to focus on core priorities with confidence and peace of mind.",
        icon: <FiSettings />
    },
    {
        title: "Extending your teams with trusted professionals",
        description:
            "We provide expert IT staffing solutions to augment your workforce with skilled professionals aligned to your unique business needs.",
        icon: <FiUsers />
    },
];

export default function Values() {
    return (
        <section className="values-section">
            <div className="container values-container">
                <h2>Technology that supports your mission — today and tomorrow</h2>
                <p className="values-subtitle">
                    Our experts bring extensive industry knowledge and experience to deliver exceptional IT solutions every time.
                </p>

                <ul className="values-list">
                    {values.map((v, i) => (
                        <li key={i} className="value-item">
                            <div className="value-icon">{v.icon}</div>
                            <div className="value-text">
                                <h3>{v.title}</h3>
                                <p>{v.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
