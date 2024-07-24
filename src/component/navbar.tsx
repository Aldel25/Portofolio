import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between px-10 py-5 shadow-md  bg-slate-100">
      <h2 className="font-bold">ADE LIANA ANKUSPA PUTRI</h2>
      <div className="flex flex-row gap-5">
        <a href="/">Home</a>
        <a href="/introduction">About Me</a>
        <a href="/projects">Projects</a>
        <a href="/education">Education</a>
      </div>
    </div>
  );
};

export default Navbar;
