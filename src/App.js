import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
    const [show, setShow] = useState("home");

    const handleClick = (e) => {
        switch (e.target.id) {
            case "home":
                setShow("home");
                break;
            case "education":
                setShow("education");
                break;
            case "experience":
                setShow("experience");
                break;
            case "projects":
                setShow("projects");
                break;
            default:
                setShow("home");
        }
    };

    return (
        <>
            <Header handleClick={handleClick} />
            {show === "home" ? (
                <Home />
            ) : show === "education" ? (
                <Education />
            ) : show === "experience" ? (
                <Experience />
            ) : (
                <Projects />
            )}{" "}
            <Footer />
        </>
    );
}
