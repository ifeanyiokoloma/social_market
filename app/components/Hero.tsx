import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <section className="flex flex-col-reverse h-screen container mx-auto md:flex-row md:justify-evenly">
        <div className="px-4 md:pl-10 sm:max-w-md md:h-full flex flex-col justify-center md:w-1/2 mt-4 bg-transparent">
          <div className="flex flex-col gap-2 mb-4 md:gap-6">
            <h1 className="text-4xl sm:text-5xl text-gold font-semibold">
              Lorem ipsum
            </h1>
            <p className="text-xs text-zinc-500 text-justify font-light sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              ducimus vero deleniti inventore molestiae illum dolorum? Dicta
              quaerat veniam reprehenderit!
            </p>
          </div>
        </div>
        <div className="h-2/3 md:h-full md:w-1/2 p-8 bg-transparent">
          <Image
            className="object-cover !static"
            alt="medal"
            src="/medal.png"
            fill
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
