import React, { useState } from "react";
import "./App.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
    const handleClick = (e) => {
        ["home", "education", "experience", "projects"].forEach((item) => {
            if (item === e.target.id) {
                console.log("SELECTED", e.target.id, item);
                document.querySelector(`#${item}`).classList.add("selected");
            } else {
                document.querySelector(`#${item}`).classList.remove("selected");
            }
        });
    };

    return (
        <>
            <Header handleClick={handleClick} />
            <Home />
            <Projects />
            <Education />
            <Experience />
            <Footer />
        </>
    );
}
