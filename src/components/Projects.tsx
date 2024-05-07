/* // eslint-disable quotes  */
import Project from "./Project";
import foxybae from "../../public/foxybae.jpg";
import luna from "../../public/luna.jpeg";
import favoriteTracks from "../../public/favoritetracks.png";
import wedding from "../../public/wedding.png";

export default function Projects() {
  return (
    <div className="bg-secondary-color grid grid-cols-2 gap-0 place-items-center h-screen w-screen lg:w-[50vw]">
      <Project
        bgImage={foxybae}
        projectName="FoxyBae"
        projectLink="https://foxybae.com"
      />
      <Project
        bgImage={luna}
        projectName="Luna Blanket"
        projectLink="https://lunablanket.com"
      />
      <Project
        bgImage={favoriteTracks}
        projectName="Your Favorite Tracks"
        projectLink="https://thunderous-bienenstitch-0bfa22.netlify.app/"
      />
      <Project
        bgImage={wedding}
        projectName="Dorryen and Mel"
        projectLink="https://quirky-swanson-52636b.netlify.app"
      />
    </div>
  );
}
