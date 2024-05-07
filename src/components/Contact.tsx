import Image from "next/image";
import memoji from "../../public/memoji.jpeg";

export default function Contact() {
  return (
    <div className="bg-tetriary-color h-screen flex justify-center items-center flex-col">
      <div className="bg-secondary-color h-[35vh] w-screen lg:w-[50vw] flex flex-col items-center justify-around pt-5 lg:pt-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-primary-color text-3xl font-semibold">
            Reach Out!
          </h2>
          <h3 className="text-primary-color text-2xl">
            Always available for a chat
          </h3>
        </div>
        <div className="relative rounded-full flex bg-tetriary-color size-40 border-4 bg-[url('/avatar.png')] bg-center bg-cover">
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
          className="flex flex-col items-center justify-center gap-2"
          href="tel:12094790926"
        >
          <h2 className="text-5xl font-medium text-center">📱</h2>
          <p className="text-xl lg:text-2xl font-bold text-center">
            209-479-0926
          </p>
        </a>
        <a
          className="flex flex-col items-center justify-center gap-2"
          href="mailto:peterdiosdadochavez@gmail.com"
        >
          <h2 className="text-5xl font-medium text-center">📧</h2>
          <p className="text-xl lg:text-2xl font-bold text-center">
            peterdiosdadochavez@gmail.com
          </p>
        </a>
        <a
          className="flex flex-col items-center justify-center gap-2"
          href="https://linkedin.com/in/peter-diosdado"
          target="_blank"
        >
          <h2 className="text-5xl font-medium text-center">💻</h2>
          <p className="text-xl lg:text-2xl font-bold text-center">LinkedIn</p>
        </a>
        <a
          className="flex flex-col items-center justify-center gap-2"
          href="https://github.com/petdios9"
          target="_blank"
        >
          <h2 className="text-5xl font-medium text-center">👨🏽‍💻</h2>
          <p className="text-xl lg:text-2xl font-bold text-center">Github</p>
        </a>
      </div>
    </div>
  );
}
