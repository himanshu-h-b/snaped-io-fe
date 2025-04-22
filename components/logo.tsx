import { rubikNormal } from "@/fonts/font";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className={clsx(
        "text-2xl text-foreground/70 flex items-center gap-2 px-5",
        rubikNormal.className,
      )}
    >
      <Image
        src="/logo.svg"
        alt="Snaped"
        width={100}
        height={100}
        className="w-8"
      />
      Snaped
    </Link>
  );
};

export default Logo;
