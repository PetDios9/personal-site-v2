import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-tetriary-color h-screen flex justify-center items-center flex-col">
      <div className="bg-secondary-color h-[35vh] w-screen lg:w-[50vw] flex place-content-center pt-10 text-5xl font-bold">
        <h2 className="text-primary-color">Say Hello!</h2>
        <div className="rounded-full flex p-28 bg-tetriary-color h-3 w-3 absolute top-36 overflow-clip border-4 justify-center bg-[url('/avatar.png')] bg-center bg-cover">
          {/* <p className=" text-primary-color">Peter</p> */}
        </div>
      </div>
      <div className="flex flex-col align-middle pt-20 bg-tetriary-color h-[65vh] w-screen lg:w-[50vw] z-10 text-primary-color gap-12">
        <a href="tel:12094790926">
          <h2 className="text-3xl font-medium italic text-center">
            Phone Number
          </h2>
          <p className="text-xl font-light text-center">209-479-0926</p>
        </a>
        <a href="mailto:peterdiosdadochavez@gmail.com">
          <h2 className="text-3xl font-medium italic text-center">Email</h2>
          <p className="text-xl font-light text-center">
            peterdiosdadochavez@gmail.com
          </p>
        </a>
        <a href="https://linkedin.com/in/peter-diosdado" target="_blank">
          <h2 className="text-3xl font-medium italic text-center">LinkedIn</h2>
          <p className="text-xl font-light text-center">
            https://linkedin.com/in/peter-diosdado
          </p>
        </a>
        <a href="https://github.com/petdios9" target="_blank">
          <h2 className="text-3xl font-medium italic text-center">LinkedIn</h2>
          <p className="text-xl font-light text-center">
            https://github.com/petdios9
          </p>
        </a>
      </div>
    </div>
  );
}
