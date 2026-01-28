// src/components/Navbar.jsx
import React, { useContext, useState } from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import { FiUser, FiLogIn, FiMenu, FiX } from "react-icons/fi";
import { UserContext } from "../context/UserContext";
import lanworksIcon from "../assets/lanworks_icon.png";
import "./Navbar.css";

export default function Navbar() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Brand */}
                <NavLink to="/lanworks" className="navbar-brand" onClick={closeMenu}>
                    <img src={lanworksIcon} alt="Lanworks Logo" className="navbar-logo" />
                    <span className="navbar-brand-text">Lanworks</span>
                </NavLink>

                {/* Mobile toggle */}
                <button
                    className="navbar-toggle"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Links */}
                <nav className={`navbar-nav ${menuOpen ? "open" : ""}`}>
                    <ul className="nav-links">
                        <li>
                            <NavLink to="/services" className="nav-link" onClick={closeMenu}>
                                Services
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                                About Us
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/jobs" className="nav-link" onClick={closeMenu}>
                                Jobs
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
                                Contact
                            </NavLink>
                        </li>

                        <li className="nav-auth">
                            {user ? (
                                <NavLink
                                    to="/profile"
                                    className="nav-user"
                                    onClick={closeMenu}
                                >
                                    <FiUser />
                                    <span>
                    My profile (<strong>{user.username}</strong>)
                  </span>
                                </NavLink>
                            ) : (
                                <button
                                    className="login-btn"
                                    onClick={() => {
                                        closeMenu();
                                        navigate("/login");
                                    }}
                                >
                                    <FiLogIn />
                                    Login
                                </button>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile overlay (tap outside to close) */}
            {menuOpen && <div className="navbar-overlay" onClick={closeMenu} />}
        </header>
    );
}
