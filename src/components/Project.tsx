export default function Project({
  bgImageURL,
  projectName,
}: {
  bgImageURL: string;
  projectName: string;
}) {
  return (
    <div
      className={`lg:hover:scale-110 bg-[${bgImageURL}] bg-cover w-full bg-center h-full cursor-pointer transform transition duration-300 lg:hover:z-10`}
    >
      <div className="h-full w-auto bg-overlay flex items-center justify-center">
        <p className="text-tetriary-color">{projectName}</p>
      </div>
    </div>
  );
}
