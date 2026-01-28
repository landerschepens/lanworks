import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Values from "./components/Values";
import Careers from "./components/Careers";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ServicePage from "./Pages/ServicePage";
import ProtectedRoute from "./Components/ProtectedRoute";
import AboutUsPage from "./Pages/AboutUs.jsx";
import JobsPage from "./Pages/JobsPage.jsx";
import ContactPage from "./Pages/ContactUs.jsx";

function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Values />
            <Careers />
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
                <Route path="/services" element={<ServicePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
            </Routes>
            <Footer />
        </>
    );
}
