import React, { useState } from "react";

import { skills } from "./skills";

export default function SkillNav({ handleClick }) {
    const navArray = Object.keys(skills);
    console.log(navArray);

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
