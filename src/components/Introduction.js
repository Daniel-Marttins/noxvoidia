/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import '../styles/Introduction.css';
import PresentationTab from "./PresentationTab";
import ProjectTab from "./ProjectTab";
import AboutTab from "./AboutTab";

const Introduction = () => {

    const [activeSection, setActiveSection] = useState(0);

    const handleButtonClick = (index) => {
        setActiveSection(index);
    };
    
    return (
        <div className="body-introduction">

            {/* ---------- PRESENTATION SECTION ----------  */}

            <section className={activeSection === 0 ? "active" : ""}>
                <PresentationTab />
            </section>

            {/* ---------- PROJECT SECTION ----------  */}

            <section className={activeSection === 1 ? "active" : ""}>
                <ProjectTab />
            </section>

            {/* ---------- CAREER SECTION ----------  */}

            <section className={activeSection === 2 ? "active" : ""}>

            </section>

            {/* ---------- ABOUT SECTION ----------  */}

            <section className={activeSection === 3 ? "active" : ""}>
                <AboutTab />
            </section>

            <div className="line-buttons">
                    <button onClick={() => handleButtonClick(0)}>Apresentação<span className="material-symbols-outlined">all_inclusive</span></button>
                    <button onClick={() => handleButtonClick(1)}>Projetos<span className="material-symbols-outlined">widgets</span></button>
                    <button onClick={() => handleButtonClick(2)}>Carreira<span className="material-symbols-outlined">work_history</span></button>
                    <button onClick={() => handleButtonClick(3)}>Sobre<span className="material-symbols-outlined">info</span></button>
                </div>
                <div className="line"></div>
            </div>
    );
}

export default Introduction;