import { rubikMedium } from "@/fonts/font";
import clsx from "clsx";

const SaleBanner = () => {
  return (
    <div
      className={clsx(
        "bg-custom-gradient text-center text-sm sm:text-base text-white py-1 px-2",
        rubikMedium.className,
      )}
    >
      LAST CHANCE Black Friday Sale ends this week!{" "}
      <span>Click here to sign up and save 30%!</span>
    </div>
  );
};

export default SaleBanner;
