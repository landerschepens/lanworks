// src/components/Navbar.jsx
export default function Navbar() {
    return (
        <header className="navbar">
            <div className="container navbar-container">
                <h1 className="logo">Lanworks</h1>
                <nav>
                    <ul className="nav-links">
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Contact</li>
                        <li className="signin">Sign In</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
