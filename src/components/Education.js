import React from "react";

import appacademyLogo from "../public/images/app-academy.png";
import freecodecampLogo from "../public/images/freecodecamp.png";
import ufscLogo from "../public/images/Brasao_UFSC_vertical_extenso.svg.png";
import udemyLogo from "../public/images/udemy-meta-image.png";

export default function Education() {
    return (
        <div className='education' id='edu'>
            <div className='education--content-box'>
                <div className='education--content-header'>
                    <img
                        className='education--logo'
                        src={appacademyLogo}
                        alt='app academy'
                    />
                    <h2>App Academy</h2>
                    San Francisco...... 2020
                    <h3>Software Engineer</h3>
                </div>
                <p>
                    <strong>Full Stack Web Development</strong> immersive
                    program focused on building advanced skills in{" "}
                    <strong>Web Application Design & Development</strong>.{" "}
                    <br />
                    App Academy's curriculum adopts and practices{" "}
                    <strong>Agile Work Flow Methodologies</strong> while
                    students work solo, in pairs or small groups, collaborating
                    on the development of several{" "}
                    <strong>full stack web applications</strong>
                    through out the 6 months program.
                    <ul>
                        <li className='education--bullet-items'>
                            Advanced and best web security practices
                        </li>
                        <li className='education--bullet-items'>
                            Product design and scalability{" "}
                        </li>
                        <li className='education--bullet-items'>
                            Test-driven development{" "}
                        </li>
                        <li className='education--bullet-items'>
                            Data structures
                        </li>
                        <li className='education--bullet-items'>Python </li>
                        <li className='education--bullet-items'>JavaScript </li>
                        <li className='education--bullet-items'>React </li>
                        <li className='education--bullet-items'>Redux </li>
                        <li className='education--bullet-items'>SQL </li>
                        <li className='education--bullet-items'>
                            Advanced Algorithms
                        </li>
                        <li className='education--bullet-items'>
                            Data Structures
                        </li>
                        <li className='education--bullet-items'>
                            System and Database Design
                        </li>
                    </ul>
                </p>
            </div>
            <div className='education--content-box'>
                <div className='education--content-header'>
                    <img
                        className='education--logo'
                        src={freecodecampLogo}
                        alt='free code camp'
                    />
                    <h2>FreeCodeCamp</h2>
                    Remote....... 2018 - Present
                    <h3>
                        Web Development - Data Visualization - Data Structures -
                        Machine Learning
                    </h3>
                </div>
                <p>
                    <a href='https://www.freecodecamp.org/jony_figs'>
                        https://www.freecodecamp.org/jony_figs
                    </a>
                    <ul>
                        <li className='education--bullet-items'>
                            Responsive Web Design Certification (300 hours)
                        </li>
                        <li className='education--bullet-items'>
                            JavaScript Algorithms and Data Structures
                            Certification (300 hours){" "}
                        </li>
                        <li className='education--bullet-items'>
                            Front End Libraries Certification (300 hours)
                        </li>
                        <li className='education--bullet-items'>
                            Data Visualization Certification (300 hours)
                        </li>
                        <li className='education--bullet-items'>
                            APIs and Microservices Certification (300 hours)
                        </li>
                        <li className='education--bullet-items'>
                            Quality Assurance Certification (300 hours)
                        </li>
                        <li className='education--bullet-items'>
                            Scientific Computing with Python Certification (300
                            hours){" "}
                        </li>
                        <li className='education--bullet-items'>
                            Data Analysis with Python Certification (300 hours)
                        </li>
                        <li className='education--bullet-items'>
                            Information Security Certification (300 hours)
                        </li>
                        <li className='education--bullet-items'>
                            Machine Learning with Python Certification (300
                            hours){" "}
                        </li>
                    </ul>
                </p>
            </div>
            <div className='education--content-box'>
                <div className='education--content-header'>
                    <img
                        className='education--logo'
                        src={ufscLogo}
                        alt='ufsc'
                    />
                    <h2>UFSC - Federal University of Santa Catarina</h2>
                    Brazil...... 2003 - 2007
                    <h3>Mechanical Engineer Bachelor's Program</h3>
                </div>
            </div>
            <div className='education--content-box'>
                <div className='education--content-header'>
                    <img
                        className='education--logo'
                        src={udemyLogo}
                        alt='udemy'
                    />{" "}
                    <h2>Udemy</h2>
                    Remote...... 2015 - Present
                    <h3>
                        SEO Marketing - Web Development - Full Stack Development
                    </h3>
                </div>
                <ul>
                    <li className='education--bullet-items'>
                        The Complete Web Developer - Rob Percival
                    </li>
                    <li className='education--bullet-items'>
                        Java Programming for Software Developers - multiple
                        authors
                    </li>
                    <li className='education--bullet-items'>
                        The Web Developer Bootcamp - Colt Steele
                    </li>
                    <li className='education--bullet-items'>
                        {" "}
                        How I hit #1 on Google - Matt Jensen
                    </li>
                    <li className='education--bullet-items'>
                        The Complete Ruby on Rails Developer Course - Rob
                        Percival
                    </li>
                    <li className='education--bullet-items'>
                        Digital Marketing Master Class - Diego Davilla
                    </li>
                    <li className='education--bullet-items'>
                        The New 2020 Complete Growth Hacking and Conversion -
                        Matt Jensen
                    </li>
                    <li className='education--bullet-items'>
                        Facebook Ads and Facebook Pixel Master Class - Course
                        Envy
                    </li>
                </ul>
            </div>
        </div>
    );
}
