import React from "react";

export default function Header(props) {
    return (
        <div className='header'>
            <div className='header--title'>
                <h1>&lt; jony_almeida /&gt;</h1>
            </div>
            <div className='header--main-menu'>
                <h2 id='home' onClick={props.handleClick}>
                    Home
                </h2>
                <h2 id='education' onClick={props.handleClick}>
                    Education
                </h2>
                <h2 id='experience' onClick={props.handleClick}>
                    Experience
                </h2>
                <h2 id='projects' onClick={props.handleClick}>
                    Projects
                </h2>
            </div>
        </div>
    );
}
