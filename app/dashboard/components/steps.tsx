import { TbArrowRight } from "react-icons/tb";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { interLight, interNormal } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";

const Steps = () => {
  const steps = [
    {
      title: "Explore Ideas",
      description:
        "Find inspiration effortlessly by browsing trending topics and themes tailored to your creative goals and audience.",
      icon: "/icons/bulb.svg",
      button: "Explore",
      href: "/dashboard/explore",
    },
    {
      title: "Generate Videos",
      description:
        "Turn your ideas into professional-quality faceless videos in minutes with our powerful Al-driven tools.",
      icon: "/icons/flash.svg",
      button: "Generate",
      href: "/dashboard/video-generator",
    },
    {
      title: "Edit Videos",
      description:
        "Fine-tune your videos by adjusting visuals, captions, and voiceovers to create content that stands out.",
      icon: "/icons/video.svg",
      button: "Edit",
      href: "/dashboard/video-editor",
    },
    {
      title: "Publish",
      description:
        "Seamlessly schedule and share your videos across multiple platforms to reach your audience at the perfect time.",
      icon: "/icons/rocket.svg",
      button: "Publish",
      href: "/dashboard/publish",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {steps.map((step, index) => (
        <div
          key={index}
          className="bg-background shadow h-[240px] sm:h-[264px] lg:h-80 xl:h-[264px] flex flex-col rounded-lg p-4 border"
        >
          <div className="flex w-full justify-between">
            <div className="p-2 bg-primary rounded-lg">
              <Image
                src={step.icon}
                alt="icon"
                width={24}
                height={24}
                className="size-8"
              />
            </div>
            <p className="text-black/70 text-sm">Step {index + 1}</p>
          </div>
          <div className="mt-6">
            <h2 className={cn("text-lg", interNormal.className)}>
              {step.title}
            </h2>
            <p
              className={cn(
                "text-secondary-foreground/80 text-sm leading-5 tracking-wider",
                interLight.className,
              )}
            >
              {step.description}
            </p>
          </div>
          <div className={cn("mt-auto w-fit", interLight.className)}>
            <Link href={step.href} className="w-fit">
              <Button>
                {step.button}
                <TbArrowRight className="ml-1 size-5" />
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
