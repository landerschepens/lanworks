import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import './Login.css';

export default function Login() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("https://lanworks-backend.onrender.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.message);
            return;
        }
        // reset error if login succeeds
        setError("");
        setUser(data.user);
        navigate("/");

        // ✅ THIS is what Navbar listens to
        setUser(data.user);

        navigate("/profile");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            {/* Display error here */}
            {error && <p className="login-error">{error}</p>}
        </form>
    );
}
