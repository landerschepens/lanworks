import { useState } from "react";

export default function PasswordGate({ children }) {
    const [password, setPassword] = useState("");
    const [authorized, setAuthorized] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "lwrks") { // replace with your desired password
            setAuthorized(true);
        } else {
            alert("Incorrect password");
        }
    };

    if (authorized) return <>{children}</>;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#1070ca",
                color: "#fff",
                textAlign: "center",
                padding: "1rem",
            }}
        >
            <h2>Enter Password to Access</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    style={{
                        padding: "0.5rem",
                        borderRadius: "5px",
                        border: "none",
                        marginTop: "1rem",
                        fontSize: "1rem",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "0.5rem 1rem",
                        marginLeft: "0.5rem",
                        borderRadius: "5px",
                        border: "none",
                        backgroundColor: "#084a81",
                        color: "#fff",
                        cursor: "pointer",
                    }}
                >
                    Enter
                </button>
            </form>
        </div>
    );
}
