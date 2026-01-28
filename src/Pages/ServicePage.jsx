import { useState } from "react";
import "./ServicePage.css";

const BRAND = "#008DD0";

const DATA = [
    {
        id: "intro",
        title: "Enterprise-grade security for cloud-first organizations",
        content: `Modern security goes far beyond firewalls and antivirus. As organizations adopt cloud, identity-centric, and highly connected environments, security must be designed, automated, and continuously improved.

Lanworks helps organizations secure their digital environments end to end — from identity and cloud platforms to detection, response, and governance — while enabling business agility and regulatory confidence.

We adapt to your organization’s needs through flexible delivery models:

• Consulting Services – Strategy, architecture, assessments, and governance
• Managed Services – Continuous monitoring, detection, and response
• Software Services – Secure development and platform engineering
• Workforce Services – On-demand security specialists and project support`,
        more: `Modern organizations need security that is integrated into how they operate — not bolted on afterward.
We help you reduce risk while keeping delivery fast, measurable, and aligned with your business priorities.`,
    },
    {
        id: "identity",
        title: "Identity & Access Security",
        content: `Protect identities, enforce least privilege, and reduce attack surface with modern IAM.

• Entra ID (Azure AD) configuration and hardening
• Privileged Identity Management (PIM)
• Conditional Access strategy and implementation
• Risk-based access controls and access reviews`,
        more: `Identity is the new perimeter. We help you implement strong access governance, reduce privilege sprawl, and improve security posture using modern identity controls and automation.`,
    },
    {
        id: "microsoft",
        title: "Microsoft & Cloud Security",
        content: `Secure Microsoft, Azure, and cloud platforms with built-in controls and automation.

• Azure security governance and policy-as-code
• Microsoft Defender XDR & cloud security
• Microsoft 365 security (Teams, SharePoint, Exchange)
• Windows 365 security assessments`,
        more: `We focus on practical, high-impact security improvements in the Microsoft ecosystem — combining governance, visibility, and enforcement across identities, endpoints, and cloud workloads.`,
    },
    {
        id: "assessments",
        title: "Security Assessments & Architecture Reviews",
        content: `Independent, actionable insight into your security posture.

• Cloud and hybrid security assessments
• Architecture and go-live security reviews
• Regulatory and compliance-driven evaluations
• Risk-ranked findings and remediation roadmaps`,
        more: `We deliver clear findings, prioritized by risk and effort, with recommendations your teams can actually implement — not generic checklists.`,
    },
    {
        id: "detection",
        title: "Detection, Incident Response & Threat Hunting",
        content: `Be prepared to detect, respond, and recover from security incidents.

• SIEM design and integration
• Detection engineering and automation
• Incident response procedures and forensics
• Proactive threat hunting and advisory`,
        more: `We help you move from “alert fatigue” to actionable detection. From engineering detections to incident playbooks and investigations, we make response faster and more reliable.`,
    },
    {
        id: "grc",
        title: "Governance, Risk & Compliance (GRC)",
        content: `Translate security obligations into structured, manageable programs.

• Security framework and control development
• Policy and procedure design
• Third-party risk management
• Security roadmaps and maturity planning`,
        more: `We help you build governance that is structured, auditable, and scalable — without turning security into bureaucracy.`,
    },
    {
        id: "offensive",
        title: "Offensive Security & Awareness",
        content: `Validate defenses through real-world attack simulations.

• Cloud penetration testing
• Red team and adversary simulation
• Phishing simulations and targeted attacks`,
        more: `We validate your controls under realistic conditions to reveal weaknesses before attackers do — and we translate results into improvements that actually reduce risk.`,
    },
    {
        id: "devops",
        title: "Secure DevOps & Kubernetes",
        content: `Embed security into development pipelines and platforms.

• Secure DevOps and CI/CD hardening
• SAST / DAST and secret scanning
• Kubernetes security assessments (AKS, GKE)
• Container and platform hardening`,
        more: `Security should accelerate delivery, not block it. We help teams shift left with practical DevSecOps patterns and hardened cloud-native platforms.`,
    },
];

export default function Page() {
    const [modal, setModal] = useState(null);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="sec-wrap" style={{ "--brand": BRAND }}>
            {/* HERO */}
            <header className="sec-hero">
                <div className="sec-heroInner">
                    <div className="sec-heroAccent" />
                    <h1 className="sec-heroTitle">Security Services</h1>
                    <p className="sec-heroSubtitle">
                        Enterprise-grade security for cloud-first organizations — delivered
                        through consulting, managed services, software services and workforce
                        support.
                    </p>
                </div>
            </header>

            {/* CONTENT AREA (Sidebar + Sections) */}
            <div className="sec-layout">
                <aside className="sec-sidebar">
                    <div className="sec-sidebarTitle">On this page</div>

                    <nav className="sec-nav">
                        {DATA.map((s) => (
                            <button
                                key={s.id}
                                className="sec-navItem"
                                onClick={() => scrollTo(s.id)}
                            >
                                {s.title}
                            </button>
                        ))}
                    </nav>
                </aside>

                <main className="sec-main">
                    {DATA.map((s) => (
                        <section key={s.id} id={s.id} className="sec-section">
                            <h2 className="sec-title">{s.title}</h2>
                            <p className="sec-text">{s.content}</p>

                            <button className="sec-moreBtn" onClick={() => setModal(s)}>
                                See more
                            </button>
                        </section>
                    ))}

                    <footer className="sec-footer">
                        <div className="sec-footerLine" />
                    </footer>
                </main>
            </div>

            {/* MODAL */}
            {modal && (
                <div className="sec-modalOverlay" onClick={() => setModal(null)}>
                    <div
                        className="sec-modal"
                        role="dialog"
                        aria-modal="true"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sec-modalHeader">
                            <div className="sec-modalTitle">{modal.title}</div>
                            <button
                                className="sec-modalClose"
                                onClick={() => setModal(null)}
                                aria-label="Close modal"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="sec-modalBody">
                            <p className="sec-modalText">{modal.more}</p>
                        </div>

                        <div className="sec-modalFooter">
                            <button
                                className="sec-modalPrimary"
                                onClick={() => setModal(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
