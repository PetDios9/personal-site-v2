"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const visStyles = "top-0 transition-all ease-in duration-300";
  const invisStyles = "top-[-100px] transition-all ease-out duration-300";
  const cls = visible ? visStyles : invisStyles;

  return (
    <nav
      id="navbar"
      className={`flex flex-row justify-center gap-2 md:gap-10 p-8 border-b-2 border-secondary-color bg-primary-color w-screen text-tetriary-color fixed ${cls} z-50`}
    >
      <a
        href="https://drive.google.com/file/d/1kVUbCx1aX9CB7xTmmWAVxrraGCk0jVjj/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-tetriary-color hover:text-secondary-color relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary-color after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        Resume
      </a>
      <a
        href="#testimonials"
        className="text-tetriary-color hover:text-secondary-color relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary-color after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        Testimonials
      </a>
      <a
        href="#projects"
        className="text-tetriary-color hover:text-secondary-color relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary-color after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="text-tetriary-color hover:text-secondary-color relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary-color after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        Contact
      </a>
    </nav>
  );
}
