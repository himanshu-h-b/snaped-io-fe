import { Button } from "@/components/button";
import { TbArrowRight } from "react-icons/tb";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { interLight, interNormal } from "@/fonts/font";
import Link from "next/link";

const VideoOptions = () => {
  const options = [
    {
      title: "Faceless v1",
      img: "/frame-27.png",
      description:
        "Find inspiration effortlessly by browsing trending topics and themes tailored to your creative goals and audience.",
      link: "",
    },
    {
      title: "Faceless v2",
      img: "/frame-27.png",
      description:
        "Elevate your content with advanced faceless videos featuring immersive animations, and lifelike AI voices for maximum impact.",
      link: "",
    },
    {
      title: "Avatar Video",
      img: "/frame-27.png",
      description:
        "Bring your ideas to life using customizable Al avatars that deliver your message with professionalism and authenticity.",
      link: "avatar-video",
    },
    {
      title: "Blog to Video",
      img: "/frame-27.png",
      description:
        "Transform still images into engaging talking visuals with AI voiceovers, perfect for unique and captivating storytelling.",
      link: "",
    },
  ];
  return (
    <div>
      <h2
        className={cn(
          "font-extralight mb-2 text-lg text-foreground/80",
          interNormal.className,
        )}
      >
        Create Video With Options
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {options.map((option, index) => (
          <div
            key={index}
            className="bg-background border shadow h-[410px] rounded-lg p-4 flex flex-col"
          >
            <h3
              className={cn(
                "text-lg font-extralight text-center text-foreground/80",
                interNormal.className,
              )}
            >
              {option.title}
            </h3>
            <div className="w-full overflow-hidden mt-2">
              <Image
                src={option.img}
                alt=""
                height={400}
                width={400}
                className="w-full object-cover"
              />
            </div>
            <p
              className={cn(
                "mt-4 font-extralight text-foreground/70",
                interLight.className,
              )}
            >
              {option.description}
            </p>
            <div className="flex justify-center mt-auto">
              <Link
                href={`/dashboard/${option.link}`}
                className="flex items-center"
              >
                <Button
                  className={cn("py-2 mt-2 w-full", interLight.className)}
                >
                  Create Video
                  <TbArrowRight className="ml-1 size-5" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoOptions;
