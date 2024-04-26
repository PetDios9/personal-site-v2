import Header from "../components/Header";
import Landing from "../components/Landing";
import Contact from "../components/Contact";
import Portrait from "../components/Portrait";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <div className="relative bg-black">
      <div className="fixed top-0 z-50">
        <Header />
      </div>
      <div className="relative md:fixed w-full md:w-6/12 min-h-screen inset-0">
        <Landing />
      </div>
      <div className="w-full md:w-6/12 ml-auto">
        <div className="sticky top-0">
          <Portrait />
        </div>
        <div className="sticky top-0">
          <AboutMe />
        </div>
        <div className="sticky top-0">
          <Projects />
        </div>
        <div className="sticky top-0">
          <Contact />
        </div>
      </div>
    </div>
  );
}
