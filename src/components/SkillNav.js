import React from "react";

import { skills } from "./skills";

export default function SkillNav({ handleClick }) {
    const navArray = Object.keys(skills);

    return (
        <div className='skill--nav'>
            {navArray.map((skill, idx) => (
                <div
                    id={skill}
                    key={idx}
                    className='skill--nav-item'
                    onClick={handleClick}>
                    {skills[skill].skillName}
                </div>
            ))}
        </div>
    );
}
