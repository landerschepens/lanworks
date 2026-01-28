// src/Pages/Profile.jsx
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { FiUser, FiMail, FiPhone } from "react-icons/fi";
import "./Profile.css";
import {GiOfficeChair} from "react-icons/gi";
import {TfiLocationPin} from "react-icons/tfi"; // we’ll style it here

export default function Profile() {
    const { user, logout } = useContext(UserContext);

    if (!user) return <p>Loading...</p>; // simple fallback

    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-avatar">
                    <FiUser size={80} />
                </div>
                <div className="profile-basic">
                    <h1>{user.username}</h1>
                    <p>{user.role || "User Role"}</p>
                </div>
            </div>

            <div className="profile-details">
                <h2>Account Details</h2>
                <div className="profile-item">
                    <FiMail />
                    <span>Email:</span>
                    <strong>{user.email || "user@example.com"}</strong>
                </div>
                <div className="profile-item">
                    <FiPhone />
                    <span>Phone:</span>
                    <strong>{user.phone || "+123456789"}</strong>
                </div>

                {/* Future fields: add any new property here */}
                {user.department && (
                    <div className="profile-item">
                        <GiOfficeChair />
                        <span>Department:</span> <strong>{user.department}</strong>
                    </div>
                )}
                {user.location && (
                    <div className="profile-item">
                        <TfiLocationPin/>
                        <span>Location:</span> <strong>{user.location}</strong>
                    </div>
                )}
            </div>

            <div className="profile-actions">
                <button className="logout-btn" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
}
