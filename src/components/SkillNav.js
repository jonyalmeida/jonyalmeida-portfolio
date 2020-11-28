import React from "react";

import { skills } from "./skills";

export default function SkillNav({ handleClick }) {
    const navArray = Object.keys(skills);

    return (
        <div className='skill--nav'>
            {navArray.map((skill, idx) => (
                <div key={idx} className='skill--nav-item'>
                    <h3 id={skill} onClick={handleClick}>
                        {skills[skill].skillName}
                    </h3>
                    <div className='skill--underbar'></div>
                </div>
            ))}
        </div>
    );
}
