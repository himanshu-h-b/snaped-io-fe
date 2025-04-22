import { Button } from "@/components/button";
import { interLight, rubikLight } from "@/fonts/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TbPlus } from "react-icons/tb";

const Introduction = () => {
  return (
    <div className="bg-background shadow w-full rounded-lg flex items-start justify-between lg:h-40 border">
      <div className="flex-1 py-4 lg:py-8 px-4 lg:pl-4 lg:pr-0">
        <h3
          className={cn(
            "text-lg font-extralight text-foreground/80",
            rubikLight.className,
          )}
        >
          Introduction to our new Blog to Video
        </h3>
        <p className={cn("text-foreground/70 mt-2", interLight.className)}>
          Elevate your content with advanced faceless videos featuring immersive
          animations.
        </p>
        <div
          className={cn("mt-3 flex items-center gap-3", interLight.className)}
        >
          <Button>
            <TbPlus className="mr-2 size-5" />
            Try Now
          </Button>
          <button className="shadow text-foreground/60 font-thin px-4 py-1 rounded-lg text-sm flex items-center hover:opacity-80 transition-all">
            Dismiss
          </button>
        </div>
      </div>
      <div className="lg:h-full hidden lg:block">
        <Image
          src="/frame.png"
          alt="Frame"
          height={400}
          width={400}
          className="w-72 h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Introduction;
