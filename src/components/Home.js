import React, { useState } from "react";

import Skill from "./Skill";
import SkillNav from "./SkillNav";
import { skills } from "./skills";

export default function Home() {
    const [selected, setSelected] = useState(1);
    // const [left, setLeft] = useState(selected - 1);
    // const [right, setRight] = useState(selected + 1);

    const navArray = Object.keys(skills);

    const handleClick = (e) => {
        e.target.classList.add("highlight");
        for (let item of navArray) {
            if (item !== e.target.id) {
                document
                    .querySelector(`#${item}`)
                    .classList.remove("highlight");
            }
        }

        setSelected(navArray.indexOf(e.target.id));
    };

    return (
        <div className='home'>
            <div className='home--personal'>
                <h2>Full Stack Software Engineer-</h2>
                <h3>
                    Mindful in life. Agile at work. Passion for solving
                    problems.
                </h3>
            </div>
            <div className='home--skills'>
                <SkillNav handleClick={handleClick} />
                <div className='carousel'>
                    <div className='carousel--side-div'>
                        {selected - 1 < 0 ? null : (
                            <Skill
                                id='left'
                                skillObj={skills[navArray[selected - 1]]}
                            />
                        )}
                    </div>
                    <div id='main' className='carousel--main-div'>
                        <Skill skillObj={skills[navArray[selected]]} />
                    </div>
                    <div id='right' className='carousel--side-div'>
                        {selected + 1 < 4 ? (
                            <Skill
                                id='right'
                                skillObj={skills[navArray[selected + 1]]}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
