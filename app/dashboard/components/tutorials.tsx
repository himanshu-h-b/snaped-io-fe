import { interNormal } from "@/fonts/font";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Tutorials = () => {
  const tutorials = [
    {
      img: "/tutorial-1.png",
      description: "How to create faceless v1 videos",
    },
    {
      img: "/tutorial-2.png",
      description: "How to create faceless v2 videos",
    },
    {
      img: "/tutorial-3.png",
      description: "How to create avatar videos",
    },
    {
      img: "/tutorial-4.png",
      description: "How to create avatar videos",
    },
  ];
  return (
    <div className={cn(interNormal.className)}>
      <h2 className="font-extralight mb-2 text-lg text-foreground/80">
        Tutorials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tutorials.map((tutorial, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-3 bg-background rounded-lg shadow border"
          >
            <Image
              src={tutorial.img}
              alt={tutorial.description}
              height={400}
              width={400}
              className="w-full object-cover"
            />
            <p className="text-base text-foreground/80">
              {tutorial.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
