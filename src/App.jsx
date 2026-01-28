import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Values from "./components/Values";
import Careers from "./components/Careers";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";

function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Values />
            <Careers />
            <Footer />
        </>
    );
}

export default function App() {
    return (
        <>
            <Navbar /> {/* ✅ ALWAYS mounted */}

            <Routes>
                <Route path="/lanworks" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    );
}
