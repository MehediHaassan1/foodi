import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
            <Navbar />
            <Hero />
        </div>
    );
};

export default App;
