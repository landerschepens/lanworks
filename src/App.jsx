// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Values from "./components/Values";
import Careers from "./components/Careers";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Services />
            <Values />
            <Careers />
            <Footer />
        </div>
    );
}

export default App;
