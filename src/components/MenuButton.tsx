"use client";
import { useState } from "react";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div
      onClick={handleClick}
      className="fixed top-5 left-5 cursor-pointer z-50"
    >
      <div className="w-[35px] h-[5px] bg-secondary-color mx-0 my-[6px]"></div>
      <div className="w-[35px] h-[5px] bg-secondary-color mx-0 my-[6px]"></div>
      <div className="w-[35px] h-[5px] bg-secondary-color mx-0 my-[6px]"></div>
    </div>
  );
}
