import React from "react";

export default function Header(props) {
    return (
        <div className='header'>
            <div className='header--title'>
                <h1>&lt; jony_almeida /&gt;</h1>
            </div>
            <div className='header--main-menu'>
                <div className='header--main-menu-inner'>
                    <h2
                        className='header--main-menu-inner-item'
                        id='home'
                        onClick={props.handleClick}>
                        Home
                    </h2>
                    <h2
                        className='header--main-menu-inner-item'
                        id='projects'
                        onClick={props.handleClick}>
                        Projects
                    </h2>
                    <h2
                        className='header--main-menu-inner-item'
                        id='education'
                        onClick={props.handleClick}>
                        Education
                    </h2>
                    <h2
                        className='header--main-menu-inner-item'
                        id='experience'
                        onClick={props.handleClick}>
                        Experience
                    </h2>
                </div>
            </div>
        </div>
    );
}
