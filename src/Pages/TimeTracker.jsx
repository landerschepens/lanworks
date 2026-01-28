// src/components/TimeTracker.jsx
import React, {useState, useEffect, useContext} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./TimeTracker.css";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../context/UserContext.jsx";


export default function TimeTracker() {
    const { user: currentUser } = useContext(UserContext);

    const navigate = useNavigate();

    // --- State ---
    const [date, setDate] = useState(new Date());
    const [entries, setEntries] = useState({});
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [note, setNote] = useState("");

    const users = ["Alice", "Bob", "Charlie"];
    const projects = ["Website Redesign", "Security Audit", "Internal Tools"];
    const customerActivities = {
        "ACME Corp": ["Consulting", "Support", "Development"],
        "Globex Inc": ["Audit", "Training", "Maintenance"],
        "Umbrella LLC": ["Security Check", "Infrastructure", "Testing"],
    };

    const [selectedUser, setSelectedUser] = useState(users[0] || "");
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [selectedCustomer, setSelectedCustomer] = useState(Object.keys(customerActivities)[0]);
    const [selectedActivity, setSelectedActivity] = useState(customerActivities[selectedCustomer][0]);

    // --- Load per-user entries from localStorage ---
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("timesheets") || "{}");
        if (saved[currentUser]) setEntries(saved[currentUser]);
    }, [currentUser]);

    //persist timesheet
    React.useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("timesheets") || "{}");
        if (saved[currentUser]) setEntries(saved[currentUser]);
    }, [currentUser]);

    React.useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("timesheets") || "{}");
        saved[currentUser] = entries;
        localStorage.setItem("timesheets", JSON.stringify(saved));
    }, [entries, currentUser]);

    // --- Update localStorage whenever entries change ---
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("timesheets") || "{}");
        saved[currentUser] = entries;
        localStorage.setItem("timesheets", JSON.stringify(saved));
    }, [entries, currentUser]);

    // --- Update activity dropdown when customer changes ---
    useEffect(() => {
        setSelectedActivity(customerActivities[selectedCustomer][0]);
    }, [selectedCustomer]);

    const dateKey = date.toISOString().split("T")[0];
    const selectedEntry = entries[dateKey] || null;

    // --- Helpers ---
    const calculateHours = (start, end) => {
        if (!start || !end) return 0;
        const [sh, sm] = start.split(":").map(Number);
        const [eh, em] = end.split(":").map(Number);
        return ((eh * 60 + em) - (sh * 60 + sm)) / 60;
    };

    // --- Handlers ---
    const handleAddEntry = () => {
        const hours = calculateHours(start, end);
        if (hours <= 0) return alert("End time must be after start time");

        const updated = {
            ...entries,
            [dateKey]: {
                start,
                end,
                hours,
                note,
                user: selectedUser,
                project: selectedProject,
                customer: selectedCustomer,
                activity: selectedActivity,
            },
        };

        setEntries(updated);
        setStart("");
        setEnd("");
        setNote("");
    };

    const handleDelete = () => {
        if (!entries[dateKey]) return;
        if (!confirm("Delete this entry?")) return;

        const updated = { ...entries };
        delete updated[dateKey];
        setEntries(updated);

        setStart("");
        setEnd("");
        setNote("");
    };

    const handleDateChange = (d) => {
        setDate(d);
        const key = d.toISOString().split("T")[0];
        const entry = entries[key];

        if (entry) {
            setStart(entry.start);
            setEnd(entry.end);
            setNote(entry.note);
            setSelectedProject(entry.project);
            setSelectedCustomer(entry.customer);
            setSelectedActivity(entry.activity);
            setSelectedUser(entry.user);
        } else {
            setStart("");
            setEnd("");
            setNote("");
            setSelectedProject(projects[0]);
            setSelectedCustomer(Object.keys(customerActivities)[0]);
            setSelectedActivity(customerActivities[Object.keys(customerActivities)[0]][0]);
            setSelectedUser(currentUser);
        }
    };

    const currentMonth = dateKey.slice(0, 7);
    const monthlyTotal = Object.entries(entries)
        .filter(([day]) => day.startsWith(currentMonth))
        .reduce((sum, [, e]) => sum + e.hours, 0);

    // --- Render ---
    return (
        <div className="tt-page">
            <div className="tt-header">
                <h1>Time Tracking</h1>
                <p>Welcome, {currentUser}</p>
            </div>

            <div className="tt-card">
                <Calendar
                    onChange={handleDateChange}
                    value={date}
                    tileClassName={({ date }) =>
                        entries[date.toISOString().split("T")[0]] ? "tt-has-entry" : null
                    }
                />

                <div className="tt-form">
                    <h3>{dateKey}</h3>

                    <label>
                        Start time
                        <input type="time" value={start} onChange={(e) => setStart(e.target.value)} />
                    </label>

                    <label>
                        End time
                        <input type="time" value={end} onChange={(e) => setEnd(e.target.value)} />
                    </label>

                    <div className="tt-dropdowns">
                        <label>
                            User:
                            <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                                {users.map((u, i) => <option key={i} value={u}>{u}</option>)}
                            </select>
                        </label>

                        <label>
                            Customer:
                            <select value={selectedCustomer} onChange={(e) => setSelectedCustomer(e.target.value)}>
                                {Object.keys(customerActivities).map((c, i) => <option key={i} value={c}>{c}</option>)}
                            </select>
                        </label>

                        <label>
                            Activity:
                            <select value={selectedActivity} onChange={(e) => setSelectedActivity(e.target.value)}>
                                {customerActivities[selectedCustomer].map((a, i) => <option key={i} value={a}>{a}</option>)}
                            </select>
                        </label>

                        <label>
                            Project:
                            <select value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
                                {projects.map((p, i) => <option key={i} value={p}>{p}</option>)}
                            </select>
                        </label>
                    </div>

                    <label>
                        Notes
                        <textarea rows="3" value={note} onChange={(e) => setNote(e.target.value)} />
                    </label>

                    <div className="tt-actions">
                        <button onClick={handleAddEntry}>
                            {selectedEntry ? "Update entry" : "Save entry"}
                        </button>
                        {selectedEntry && (
                            <button className="tt-danger" onClick={handleDelete}>
                                Delete
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="tt-summary">
                <h3>{currentMonth} summary</h3>
                <p><strong>Total:</strong> {monthlyTotal.toFixed(2)} hours</p>
            </div>

            <button className="tt-review-btn" onClick={() => navigate("/review")}>
                Review Entries
            </button>
        </div>
    );
}
