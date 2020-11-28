import React, { useState } from "react";

import Skill from "./Skill";
import SkillNav from "./SkillNav";
import { skills } from "./skills";

import githubLogo from "../public/images/github-icon.png";
import linkedinLogo from "../public/images/linkedin-icon.png";
import codewarsLogo from "../public/images/codewars-icon.png";
import emailLogo from "../public/images/email-icon.png";
import phoneLogo from "../public/images/phone-icon.png";

export default function Home() {
    const [select, setSelect] = useState({
        selected: 1,
        left: 0,
        right: 2,
    });
    const navArray = Object.keys(skills);

    const handleClick = (e) => {
        console.log("CLICK");
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
        <div className='home' id='hm'>
            <div className='home--personal'>
                <div>
                    <h2>Full Stack Software Engineer-</h2>
                    <h3>
                        Mindful in life. Agile at work. Passion for solving
                        problems.
                    </h3>
                </div>
                <h2>Contact:</h2>
                <div className='home--personal--links'>
                    <a href='mailto:jony.figs@gmail.com'>
                        <img
                            style={{ width: "95px" }}
                            className='home--personal-github'
                            src={emailLogo}
                            alt='email'
                        />
                    </a>
                    <a href='callto:jony.figs@gmail.com'>
                        <img
                            className='home--personal-github'
                            src={phoneLogo}
                            alt='phone'
                        />
                    </a>
                    <br />
                    <br />
                    <a href='https://github.com/jonyalmeida'>
                        <img
                            className='home--personal-github'
                            src={githubLogo}
                            alt='github'
                        />
                    </a>
                    <br />
                    <br />
                    <a href='https://www.linkedin.com/in/jony-almeida-48940a16b/'>
                        <img
                            className='home--personal-github'
                            src={linkedinLogo}
                            alt='linkedin'
                        />
                    </a>
                    <br />
                    <br />
                    <a href='https://www.codewars.com/users/hannahou'>
                        <img
                            className='home--personal-github'
                            src={codewarsLogo}
                            alt='codewars'
                        />
                    </a>
                </div>
            </div>
            <div className='home--skills'>
                {/* <SkillNav handleClick={handleClick} /> */}
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
