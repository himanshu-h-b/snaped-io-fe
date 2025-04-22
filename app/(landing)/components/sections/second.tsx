import { interNormal, rubikMedium } from "@/fonts/font";
import clsx from "clsx";
import Image from "next/image";

const SecondSection = () => {
  return (
    <div className="bg-primary">
      <div className="flex flex-col md:flex-row w-full gap-8 px-4 sm:px-6 md:px-8 lg:px-20 py-12 lg:py-20 max-w-screen-2xl mx-auto">
        <div className="w-full md:w-2/4 pt-6">
          <h2
            className={clsx(
              "text-2xl lg:text-3xl tracking-wider font-bold text-foreground/80",
              rubikMedium.className,
            )}
          >
            Turn Your Text into Engaging Faceless Video
          </h2>
          <p
            className={clsx(
              "text-lg lg:text-xl text-secondary-foreground/80 tracking-wider leading-6 mt-4",
              interNormal.className,
            )}
          >
            Transform your written content into dynamic, engaging videos in just
            a few clicks! Simply input your script or text, and let our AI
            generate a fully animated video complete with visuals, voiceovers,
            and captions. It's the easiest way to bring your ideas to life
            without needing any video production skills.
          </p>
        </div>
        <div className="w-full md:w-2/4">
          <Image
            src="/use-case.png"
            alt="video"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
