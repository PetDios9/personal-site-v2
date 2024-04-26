export default function Project({
  bgImageURL,
  projectName,
}: {
  bgImageURL: string;
  projectName: string;
}) {
  return (
    <div
      className={`hover:scale-105 bg-[${bgImageURL}] bg-cover w-full bg-center h-full cursor-pointer transform transition duration-500 hover:z-10`}
    >
      <div className="h-full w-auto bg-overlay flex items-center justify-center">
        <p className="text-tetriary-color">{projectName}</p>
      </div>
    </div>
  );
}
