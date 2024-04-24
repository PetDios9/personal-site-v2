import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      <div className="sticky top-0 z-50 lg:visible invisible">
        <Header />
      </div>
      <div>
        <AboutMe />
      </div>
      <div className="sticky top-0" id="projects">
        <Contact />
      </div>
      <div className="sticky top-0 ">
        <Contact />
      </div>
    </div>
  );
}
