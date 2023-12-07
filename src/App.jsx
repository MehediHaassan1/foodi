import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Catagories from "./components/Catagories";

const App = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
            <Navbar />
            <Hero />
            <Catagories />
        </div>
    );
};

export default App;
