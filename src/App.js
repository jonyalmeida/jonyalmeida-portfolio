import React, { useState } from "react";
import "./App.scss";

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
            {show === "home" ? (
                <Home />
            ) : show === "education" ? (
                <Education />
            ) : show === "experience" ? (
                <Experience />
            ) : (
                <Projects />
            )}
            <Footer />
        </>
    );
}
