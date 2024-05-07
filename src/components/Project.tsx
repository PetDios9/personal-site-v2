import Image, { StaticImageData } from "next/image";

export default function Project({
  bgImage,
  projectName,
  projectLink,
}: {
  bgImage: StaticImageData;
  projectName: string;
  projectLink: string;
}) {
  return (
    <div className="relative lg:hover:scale-110 w-full h-full cursor-pointer transform transition duration-300 lg:hover:z-10">
      <a href={projectLink} target="_blank">
        <Image src={bgImage} alt="Logo" fill className="-z-10 object-cover" />
        <div className="h-full w-auto bg-overlay flex items-center justify-center">
          <p className="text-tetriary-color">{projectName}</p>
        </div>
      </a>
    </div>
  );
}
