import React from "react";
import Header from "./Header";

export default function Sidebar() {
  return (
    <section id='sidebar' className='sidebar'>
      <div id='sidebar-pic' className='sidebar-pic'></div>
      <div className='sidebar-name'>
        <h1>Jony Almeida</h1>
        <h2>Full Stack Software Developer</h2>
      </div>
      <div className='sidebar-menu'></div>
    </section>
  );
}
