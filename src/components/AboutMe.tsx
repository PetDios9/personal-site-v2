import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:justify-center lg:content-center lg:pl-14 xl:pl-20 gap-8 w-auto">
      <div className="h-[90vh] lg:h-auto flex flex-col justify-center items-center lg:items-start gap-2">
        <h2 className="overflow-hidden whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl font-bold text-left">
          Hello World!
        </h2>
        <h2 className="overflow-hidden whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl font-bold text-left">
          I am <span className="text-orange-500">Peter :-)</span>
        </h2>
        <h2 className="overflow-hidden whitespace-nowrap text-4xl lg:text-5xl xl:text-6xl font-bold text-left">
          I like to work with
        </h2>
        <span className="text-orange-500 inline-flex flex-col h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] 2xl:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="text-4xl lg:text-5xl xl:text-6xl font-bold block animate-text-slide-5 text-center lg:text-left leading-tight [&_li]:block text-nowrap">
            <li className="pb-7">JavaScript</li>
            <li className="pb-7">Python</li>
            <li className="pb-7">Front-end</li>
            <li className="pb-7">Back-end</li>
            <li className="pb-7">and More!</li>
            <li className="pb-7" aria-hidden="true">
              JavaScript
            </li>
          </ul>
        </span>
      </div>
      <div className="flex justify-center h-screen w-full bg-cover max-w-fit">
        <Image
          src="/IMG_4737-min.jpeg"
          width={900}
          height={1000}
          alt="Peter Diosdado"
          className=" object-cover"
        />
      </div>
    </div>
  );
}
