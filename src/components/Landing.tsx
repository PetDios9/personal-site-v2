import Image from "next/image";

export default function Landing() {
  return (
    <div className="h-screen lg:w-[50vw] flex flex-col justify-center items-center lg:items-start lg:pl-14 xl:pl-20 gap-3 bg-primary-color text-tetriary-color">
      <h2 className="whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl font-bold text-left animate-fade-longer">
        Hello World. I am
      </h2>
      <h2 className="whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl font-bold text-left animate-fade-longer">
        <span className="text-secondary-color">Peter Diosdado :-)</span>
      </h2>
      <h2 className="whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl font-bold text-left animate-fade-longer">
        A software engineer.
      </h2>
      <h2 className="whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl font-bold text-left animate-fade-longer">
        I like to work with
      </h2>
      <span className="text-secondary-color inline-flex flex-col h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] 2xl:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden animate-fade-longer">
        <ul className="text-4xl lg:text-5xl xl:text-6xl font-bold block animate-text-slide-5 text-center lg:text-left leading-tight [&_li]:block text-nowrap">
          <li className="pb-7">JavaScript</li>
          <li className="pb-7">Python</li>
          <li className="pb-7">the Front-end</li>
          <li className="pb-7">the Back-end</li>
          <li className="pb-7">so much more!</li>
          <li className="pb-7" aria-hidden="true">
            JavaScript
          </li>
        </ul>
      </span>
      <div>
        <a href="#contact">
          <button className="rounded-full border-2 border-secondary-color bg-secondary-color lg:bg-transparent hover:bg-secondary-color text-tetriary-color px-8 py-3 cursor-pointer transform transition duration-300 animate-fade-longer">
            <p>Let's Make Something Great</p>
          </button>
        </a>
      </div>
    </div>
  );
}
