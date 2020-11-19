import React, { useState } from "react";

import Skill from "./Skill";
import SkillNav from "./SkillNav";
import { skills } from "./skills";

export default function Home() {
    const [select, setSelect] = useState({
        selected: 1,
        left: 0,
        right: 2,
    });
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
        setSelect({
            selected: navArray.indexOf(e.target.id),
            left: navArray.indexOf(e.target.id) - 1,
            right: navArray.indexOf(e.target.id) + 1,
        });
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
                        {select.left >= 0 && (
                            <Skill
                                id='left'
                                skillObj={skills[navArray[select.left]]}
                            />
                        )}
                    </div>
                    <div id='main' className='carousel--main-div'>
                        <Skill skillObj={skills[navArray[select.selected]]} />
                    </div>
                    <div id='right' className='carousel--side-div'>
                        {select.right < 4 && (
                            <Skill
                                id='right'
                                skillObj={skills[navArray[select.right]]}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
