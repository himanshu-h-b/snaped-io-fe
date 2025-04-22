import clsx from "clsx";
import Image from "next/image";
import { interBold } from "@/fonts/font";
import { Button } from "@/components/button";

const SixthSection = () => {
  const imagePart1 = [
    "/action-image-1.png",
    "/action-image-2.png",
    "/action-image-3.png",
  ];

  const imagePart2 = [
    "/action-image-4.png",
    "/action-image-5.png",
    "/action-image-6.png",
  ];

  return (
    <div className="bg-primary">
      <div className="grid grid-cols-5 items-center w-full px-4 py-6 md:py-0 sm:px-6 md:px-8 lg:px-20 overflow-hidden max-w-screen-2xl mx-auto">
        <div className="hidden md:col-span-1 h-full md:grid grid-cols-2 gap-6 overflow-hidden">
          <div className="space-y-4 h-full">
            {imagePart1.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="Action Image"
                height={400}
                width={400}
                className="w-full rounded-lg overflow-hidden"
              />
            ))}
          </div>
          <div className="space-y-4 h-full">
            {imagePart2.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="Action Image"
                height={400}
                width={400}
                className="w-full rounded-lg overflow-hidden"
              />
            ))}
          </div>
        </div>
        <div className="col-span-5 md:col-span-3 h-full flex flex-col items-center justify-center">
          <div className="max-w-xl flex flex-col items-center justify-center text-center text-foreground/80">
            <p
              className={clsx(
                "text-lg md:text-2xl font-bold",
                interBold.className,
              )}
            >
              See our AI in{" "}
              <span className="text-gradient bg-clip-text bg-custom-gradient">
                Action
              </span>
            </p>
            <p
              className={clsx(
                "text-xl md:text-2xl lg:text-3xl font-bold mt-2 mx-2",
                interBold.className,
              )}
            >
              Create{" "}
              <span className="text-gradient bg-clip-text bg-custom-gradient">
                stunning faceless
              </span>{" "}
              videos within no time
            </p>
            <Button className="text-lg py-2 px-6 mt-8">
              Start Creating Now
            </Button>
          </div>
        </div>
        <div className="hidden md:col-span-1 h-full md:grid grid-cols-2 gap-6 overflow-hidden">
          <div className="space-y-4 h-full">
            {imagePart1.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="Action Image"
                height={400}
                width={400}
                className="w-full rounded-lg overflow-hidden"
              />
            ))}
          </div>
          <div className="space-y-4 h-full">
            {imagePart2.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="Action Image"
                height={400}
                width={400}
                className="w-full rounded-lg overflow-hidden"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
