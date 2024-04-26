import Image from "next/image";

export default function Portrait() {
  return (
    <div className=" h-screen flex justify-center items-center bg-cover bg-center bg-[url('/IMG_5479.jpg')]">
      <div className=" inset-0 h-full w-full absolute bg-secondary-color opacity-35"></div>
    </div>
  );
}
