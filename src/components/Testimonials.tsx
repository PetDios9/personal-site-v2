"use client";
import { useState } from "react";
type Testimonial = {
  content: string;
  author: string;
  title: string;
};
export default function Testimonials() {
  const [testNum, setTestNum] = useState(1);
  const testimonial1: Testimonial = {
    content:
      "Peter was always eager to contribute new ideas and approaches to design sessions. His passion for software development and his thirst for knowledge are qualitites that I highly value. Peter's eagerness to learn new things and willingness to explore new ideas will make him a valuable asset to any company he works for in the future. I am confident that he will hit the ground running in his new role.",
    author: "Alex Baeza",
    title: "Director of Engineering @ Boosted Commerce",
  };
  const testimonial2: Testimonial = {
    content:
      "Peter picks up new technologies with ease and is eager to continue growing as a Software Engineer. He is especially passionate about best practices and adheres to them and pushes teams to do so as well.",
    author: "Roman Lopez",
    title: "Software Engineer @ Oracle GBU",
  };
  const testimonial3: Testimonial = {
    content:
      "He picks up our poop regularly, plays with us, and makes sure we are well fed. He's cool, we guess.",
    author: "George & Esme 🐱🐾",
    title: "CCO's (Chief Cat Officer) @ Peter's Home ",
  };
  let renderedTest;
  switch (testNum) {
    case 1:
      renderedTest = testimonial1;
      break;
    case 2:
      renderedTest = testimonial2;
      break;
    case 3:
      renderedTest = testimonial3;
      break;
  }
  const handleClick = () => {
    if (testNum === 3) {
      setTestNum(1);
      return;
    }
    setTestNum(testNum + 1);
  };
  return (
    <div
      key={testNum}
      className="h-screen w-screen lg:w-[50vw] flex flex-col justify-center items-start bg-secondary-color text-primary-color p-6 lg:p-24 gap-8"
    >
      <h2 className="font-black text-3xl absolute top-32">Testimonials</h2>
      <p
        key={testNum}
        className=" text-left text-xl lg:text-3xl font-bold animate-fade delay-75"
      >
        "{renderedTest!.content}"
      </p>
      <div>
        <p className="lg:text-xl font-bold animate-fade delay-500">
          {renderedTest!.author}
        </p>
        <p className="font-bold animate-fade">{renderedTest!.title}</p>
      </div>
      <button
        className="rounded-full bg-primary-color absolute bottom-32 p-3"
        onClick={handleClick}
      >
        ➡️
      </button>
    </div>
  );
}
