import Image from "next/image";
import memoji from "../../public/memoji.jpeg";

export default function Contact() {
  return (
    <div className="bg-tetriary-color h-screen flex justify-center items-center flex-col">
      <div className="bg-secondary-color h-[35vh] w-screen lg:w-[50vw] flex flex-col items-center justify-around pt-5 lg:pt-8 text-5xl font-bold">
        <h2 className="text-primary-color">Say Hi!</h2>
        <div className="relative rounded-full flex bg-tetriary-color size-48 border-4 bg-[url('/avatar.png')] bg-center bg-cover">
          <Image
            className="rounded-full"
            src={memoji}
            alt="Peter Memoji"
            fill={true}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-tetriary-color h-[65vh] w-screen lg:w-[50vw] z-10 text-primary-color gap-8">
        <a
          className="flex flex-col items-center justify-center gap-4"
          href="tel:12094790926"
        >
          <div className="rounded-full flex justify-center items-center bg-secondary-color size-11 lg:size-16">
            <h2 className="text-3xl font-medium text-center">📱</h2>
          </div>
          <p className="text-xl lg:text-2xl font-bold text-center">
            209-479-0926
          </p>
        </a>
        <a
          className="flex flex-col items-center justify-center gap-4"
          href="mailto:peterdiosdadochavez@gmail.com"
        >
          <div className="rounded-full flex justify-center items-center bg-secondary-color size-11 lg:size-16">
            <h2 className="text-3xl font-medium text-center">📧</h2>
          </div>
          <p className="text-xl lg:text-2xl font-bold text-center">
            peterdiosdadochavez@gmail.com
          </p>
        </a>
        <a
          className="flex flex-col items-center justify-center gap-4"
          href="https://linkedin.com/in/peter-diosdado"
          target="_blank"
        >
          <div className="rounded-full flex justify-center items-center bg-secondary-color size-11 lg:size-16">
            <h2 className="text-3xl font-medium text-center">💻</h2>
          </div>
          <p className="text-xl lg:text-2xl font-bold text-center">LinkedIn</p>
        </a>
        <a
          className="flex flex-col items-center justify-center gap-4"
          href="https://github.com/petdios9"
          target="_blank"
        >
          <div className="rounded-full flex justify-center items-center bg-secondary-color size-11 lg:size-16">
            <h2 className="text-3xl font-medium text-center">👨🏽‍💻</h2>
          </div>
          <p className="text-xl lg:text-2xl font-bold text-center">Github</p>
        </a>
      </div>
    </div>
  );
}
