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
      <div className="w-full lg:w-6/12 ml-auto relative snap-y snap-mandatory">
        <div className="sticky top-0 snap-start">
          <Portrait />
        </div>
        <div className="sticky top-0 snap-start">
          <AboutMe />
        </div>
        <div className="sticky top-0 snap-start" id="projects">
          <Projects />
        </div>
        <div className="sticky top-0 snap-start" id="testimonials">
          <Testimonials />
        </div>
        <div className="sticky top-0 snap-start" id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
