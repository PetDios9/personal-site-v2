import Image from "next/image";

export default function Portrait() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <Image
        src="/IMG_4737-min.jpeg"
        alt="Peter Diosdado"
        className="object-cover"
        fill={true}
      />
    </div>
  );
}
