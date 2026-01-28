// src/components/Navbar.jsx
import React, { useContext } from "react";
import {Link, useNavigate} from "react-router-dom";
import { FiUser, FiLogIn } from "react-icons/fi";
import { UserContext } from "../context/UserContext";
import lanworksIcon from '../assets/lanworks_icon.png';



export default function Navbar() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    return (
        <header className="navbar">
            <div className="container navbar-container">
                <Link to="/lanworks" className="navbar-brand">
                    <img
                        src={lanworksIcon} // replace with your image path
                        alt="Lanworks Logo"
                        className="navbar-logo"
                    />
                    <span className="navbar-brand-text">Lanworks</span>
                </Link>
                <nav>
                    <ul className="nav-links">
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Contact</li>
                        <li className="signin">
                            {user ? (
                                <span
                                    className="nav-user"
                                    onClick={() => navigate("/profile")}
                                    style={{cursor: "pointer"}} // makes it obvious it’s clickable
                                >
            <FiUser/>
            <span>
                My profile (<strong>{user.username}</strong>)
            </span>
        </span>
                            ) : (
                                <button
                                    className="login-btn"
                                    onClick={() => navigate("/login")}
                                >
                                    <FiLogIn/>
                                    Login
                                </button>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
