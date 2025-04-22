import { interNormal, rubikMedium } from "@/fonts/font";
import clsx from "clsx";
import Image from "next/image";

const ThirdSection = () => {
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
            Effortless Video Creation from Blogs
          </h2>
          <p
            className={clsx(
              "text-lg lg:text-xl text-secondary-foreground/80 tracking-wider leading-6 mt-4",
              interNormal.className,
            )}
          >
            Creating videos from your blogs is now a breeze! Our intuitive
            platform lets you convert blog URLs into faceless videos with just a
            few clicks. Adjust pacing, add captions, trim unwanted parts, and
            customize visuals effortlessly. Produce polished, professional
            videos in no time, without the need for editing expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
