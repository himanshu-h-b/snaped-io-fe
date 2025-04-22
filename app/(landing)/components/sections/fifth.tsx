import clsx from "clsx";
import { interNormal, rubikMedium } from "@/fonts/font";
import Image from "next/image";

const FifthSection = () => {
  return (
    <div className="bg-background">
      <div className="flex flex-col-reverse md:flex-row w-full gap-8 px-4 sm:px-6 md:px-8 lg:px-20 py-12 lg:py-20 max-w-screen-2xl mx-auto">
        <div className="w-full md:w-2/4">
          <Image
            src="/use-case.png"
            alt="video"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-2/4 pt-6">
          <h2
            className={clsx(
              "text-2xl lg:text-3xl font-bold tracking-wider text-foreground/80",
              rubikMedium.className,
            )}
          >
            Effortless Video Editing at Your Fingertips
          </h2>
          <p
            className={clsx(
              "text-lg lg:text-xl text-secondary-foreground/80 tracking-wider leading-6 mt-4",
              interNormal.className,
            )}
          >
            Editing videos has never been this easy! With our intuitive
            platform, you can make quick edits to your videos with just a few
            clicks. Adjust the pacing, add captions, trim unwanted parts, and
            even change the visuals without needing any editing experience.
            Create polished, professional videos in no time, all without the
            learning curve of complex editing software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
