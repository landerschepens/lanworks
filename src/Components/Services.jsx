import { FiShield, FiServer, FiCode, FiUsers, FiTrendingUp,FiCloud } from "react-icons/fi";

const services = [
    {
        title: "Security Services",
        description: "Protect your business with robust cybersecurity solutions.",
        icon: <FiShield />
    },
    {
        title: "Managed Services",
        description: "Keep your IT infrastructure running smoothly with our expert management.",
        icon: <FiServer />
    },
    {
        title: "Software Services",
        description: "Custom software solutions tailored to your business needs.",
        icon: <FiCode />
    },
    {
        title: "Workforce Services",
        description: "Flexible IT staffing to scale your operations efficiently.",
        icon: <FiUsers />
    },
    {
        title: "Consulting Services",
        description: "Expert IT guidance to make informed technology decisions.",
        icon: <FiTrendingUp />
    },
    {
        title: "Cloud Integration Services",
        description:
            "Seamlessly integrate cloud solutions to enhance scalability, flexibility, and business continuity.",
        icon: <FiCloud />  // <-- react-icons cloud icon
    },
];

export default function Services() {
    return (
        <section className="services">
            <div className="container services-grid">
                {services.map((s, i) => (
                    <div key={i} className="service-card">
                        <div className="service-icon">{s.icon}</div>
                        <h3>{s.title}</h3>
                        <p>{s.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
