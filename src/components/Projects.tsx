/* // eslint-disable quotes  */
import Project from "./Project";
export default function Projects() {
  return (
    <div className="bg-secondary-color grid grid-cols-2 gap-0 place-items-center h-screen w-screen lg:w-[50vw]">
      <Project bgImageURL="url('/IMG_5479.jpg')" projectName="Peter" />
      <Project bgImageURL="url('/IMG_5479.jpg')" projectName="George" />
      <Project bgImageURL="url('/IMG_5479.jpg')" projectName="Peter" />
      <Project bgImageURL="url('/IMG_5479.jpg')" projectName="Peter" />
      <Project bgImageURL="url('/IMG_5479.jpg')" projectName="Peter" />
      <Project bgImageURL="url('/IMG_5479.jpg')" projectName="Peter" />
    </div>
  );
}
