import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="grid grid-cols-2 justify-center content-center p-6 gap-12 h-screen w-auto">
      <div className="col-span-2">
        <p className="text-center text-4xl font-cedarville">Hello World</p>
      </div>
      <div className="flex items-center">
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu
          non diam phasellus vestibulum lorem sed risus ultricies. Tellus cras
          adipiscing enim eu turpis. Auctor augue mauris augue neque. Facilisi
          cras fermentum odio eu feugiat pretium nibh ipsum consequat. Elit ut
          aliquam purus sit amet luctus venenatis lectus magna. Vitae tempus
          quam pellentesque nec. Sed blandit libero volutpat sed cras ornare
          arcu. Amet massa vitae tortor condimentum lacinia. Ut eu sem integer
          vitae justo eget magna fermentum iaculis. In arcu cursus euismod quis
          viverra. Ut ornare lectus sit amet est placerat in egestas erat.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/IMG_4737-min.jpeg"
          width={400}
          height={500}
          alt="Peter Diosdado"
          className="shadow-[20px_25px_23px_0px_#ed8936] text-center"
        />
      </div>
    </div>
  );
}
