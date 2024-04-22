import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="grid grid-cols-2 justify-center content-center p-6 gap-8 h-screen w-auto">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="overflow-hidden whitespace-nowrap pr-5 text-6xl font-bold text-center">
          Hello World!
        </h2>
        <h2 className="overflow-hidden whitespace-nowrap pr-5 text-5xl font-bold text-center">
          I am
        </h2>
        <span className="text-orange-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="text-4xl font-bold block animate-text-slide text-center leading-tight [&_li]:block">
            <li>Peter :-)</li>
            <li>a Software Engineer</li>
            <li>a Problem Solver</li>
            <li>a Leader</li>
            <li>an Innovator</li>
            <li aria-hidden="true">Peter :-)</li>
          </ul>
        </span>
      </div>
      <div className="flex justify-center">
        <Image
          src="/IMG_4737-min.jpeg"
          width={400}
          height={500}
          alt="Peter Diosdado"
          className="shadow-[20px_25px_23px_0px_#ed8936] text-center rounded-lg"
        />
      </div>
    </div>
  );
}
