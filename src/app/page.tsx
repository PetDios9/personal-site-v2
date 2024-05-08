import Header from "../components/Header";
import Landing from "../components/Landing";
import Contact from "../components/Contact";
import Portrait from "../components/Portrait";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="relative bg-black">
      <Header />
      {/* <div>
        <MenuButton />
      </div> */}
      <div className="sticky top-0 lg:top-auto lg:fixed w-full lg:w-6/12 min-h-screen inset-0">
        <Landing />
      </div>
      <div className="w-full lg:w-6/12 ml-auto relative">
        <div className="sticky top-0">
          <Portrait />
        </div>
        <div className="sticky top-0">
          <AboutMe />
        </div>
        <div className="sticky top-0" id="projects">
          <Projects />
        </div>
        <div className="sticky top-0" id="contact">
          <Testimonials />
        </div>
        <div className="sticky top-0" id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
