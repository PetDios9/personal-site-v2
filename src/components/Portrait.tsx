import Image from "next/image";

export default function Portrait() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:justify-center lg:content-center w-auto bg-orange-500">
      <div className="hidden h-screen lg:flex flex-col justify-center items-center lg:items-start lg:pl-14 xl:pl-20 gap-3"></div>
      <div className="flex justify-center h-screen w-full bg-cover max-w-fit">
        <Image
          src="/IMG_4737-min.jpeg"
          width={900}
          height={1000}
          alt="Peter Diosdado"
          className="object-cover"
        />
      </div>
    </div>
    // <div className="flex justify-center h-screen w-full bg-cover max-w-fit">
    //   <Image
    //     src="/IMG_4737-min.jpeg"
    //     width={900}
    //     height={1000}
    //     alt="Peter Diosdado"
    //     className="object-cover"
    //   />
    // </div>
  );
}
