import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className='header'>
      <div>
        <h1>&lt; jony_almeida /&gt;</h1>
      </div>
      <BrowserRouter>
        <div className='menu'>
          <NavLink to='/jony'>Home</NavLink>
          <NavLink to='/education'>Education</NavLink>
          <NavLink to='/experience'>Experience</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
        </div>
      </BrowserRouter>
    </div>
  );
}
