import clsx from "clsx";
import Image from "next/image";
import { interLight, interNormal, rubikLight, rubikMedium } from "@/fonts/font";

const SeventhSection = () => {
  const steps = [
    {
      title: "Explore Ideas",
      description:
        "Find inspiration effortlessly by browsing trending topics and themes tailored to your creative goals and audience.",
      icon: "/icons/bulb.svg",
    },
    {
      title: "Generate Videos",
      description:
        "Turn your ideas into professional-quality faceless videos in minutes with our powerful Al-driven tools.",
      icon: "/icons/flash.svg",
    },
    {
      title: "Edit Videos",
      description:
        "Fine-tune your videos by adjusting visuals, captions, and voiceovers to create content that stands out.",
      icon: "/icons/video.svg",
    },
    {
      title: "Publish",
      description:
        "Seamlessly schedule and share your videos across multiple platforms to reach your audience at the perfect time.",
      icon: "/icons/rocket.svg",
    },
  ];
  return (
    <div className="bg-background">
      <div className="flex flex-col items-center text-center w-full px-4 sm:px-6 md:px-8 lg:px-20 py-20 max-w-screen-2xl mx-auto">
        <h3
          className={clsx(
            "bg-custom-gradient text-gradient bg-clip-text text-2xl lg:text-3xl font-semibold",
            rubikMedium.className,
          )}
        >
          How Snapped Works
        </h3>
        <p
          className={clsx(
            "text-foreground/90 lg:w-2/4 text-base lg:text-lg mt-4 leading-5",
            rubikLight.className,
          )}
        >
          Learn how Snaped simplifies video creation in just a few
          steps—explore, create, personalize, and publish your perfect faceless
          videos effortlessly!
        </p>
        <div className="mt-10 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-background shadow-lg flex flex-col rounded-lg p-4 border"
              >
                <div className="flex w-full justify-between">
                  <div className="p-2 bg-primary h-12 w-12 rounded-lg grid items-center overflow-hidden">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={20}
                      height={20}
                      className="w-full"
                    />
                  </div>
                  <p className="text-black/70 text-sm">Step {index + 1}</p>
                </div>
                <div className="mt-6">
                  <h2 className={clsx("text-lg", interNormal.className)}>
                    {step.title}
                  </h2>
                  <p
                    className={clsx(
                      "text-foreground/70 leading-5 tracking-wider",
                      interLight.className,
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
