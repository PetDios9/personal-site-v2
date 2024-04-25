import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="h-screen lg:w-[50vw] flex flex-col justify-center items-center lg:items-start lg:pl-14 xl:pl-20 gap-3 bg-black">
      <h2 className="overflow-hidden whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl font-bold text-left">
        Hello World!
      </h2>
      <h2 className="overflow-hidden whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl font-bold text-left">
        I am <span className="text-orange-500">Peter :-)</span>
      </h2>
      <h2 className="overflow-hidden whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl font-bold text-left">
        A software engineer.
      </h2>
      <h2 className="overflow-hidden whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl font-bold text-left">
        I like to work with
      </h2>
      <span className="text-orange-500 inline-flex flex-col h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] 2xl:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
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
    </div>
  );
}
