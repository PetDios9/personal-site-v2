import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Portrait from "../components/Portrait";

export default function Home() {
  return (
    <div className="relative flex flex-col bg-black">
      <div className="fixed top-0 z-50">
        <Header />
      </div>
      <div className="sticky top-0 lg:z-40">
        <AboutMe />
      </div>
      <div className="sticky lg:fixed top-0" id="portrait">
        <Portrait />
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
