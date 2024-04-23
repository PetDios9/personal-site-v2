import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:justify-center lg:content-center xl:pl-20 gap-8 w-auto">
      <div className="h-[90vh] lg:h-auto flex flex-col justify-center items-center lg:items-start gap-2">
        <h2 className="overflow-hidden whitespace-nowrap pl-6 text-4xl xl:text-6xl font-bold text-left">
          Hello World!
        </h2>
        <h2 className="overflow-hidden whitespace-nowrap pl-6 text-4xl xl:text-6xl font-bold text-left">
          I am
        </h2>
        <span className="text-orange-500 inline-flex pl-6 flex-col h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] 2xl:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="text-4xl xl:text-6xl font-bold block animate-text-slide-5 text-center lg:text-left leading-tight [&_li]:block text-nowrap">
            <li className="pb-7">Peter :-)</li>
            <li className="pb-7">a Software Engineer</li>
            <li className="pb-7">a Problem Solver</li>
            <li className="pb-7">a Leader</li>
            <li className="pb-7">an Innovator</li>
            <li className="pb-7" aria-hidden="true">
              Peter :-)
            </li>
          </ul>
        </span>
      </div>
      <div className="flex justify-center h-screen w-full bg-cover max-w-fit	">
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
