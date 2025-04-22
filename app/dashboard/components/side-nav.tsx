"use client";
import Link from "next/link";
import Logo from "@/components/logo";
import clsx from "clsx";
import { interNormal } from "@/fonts/font";
import { usePathname } from "next/navigation";
import useNavLinks from "./nav-links";
import { GiftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SideNavbar = () => {
  const pathname = usePathname();
  const navlinks = useNavLinks();

  return (
    <div className="hidden fixed top-0 left-0 w-64 border-r bg-background h-screen border-2 shadow lg:flex flex-col py-6">
      <Logo />
      <nav className="flex flex-col items-start mt-12 w-full">
        {navlinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={clsx(
              "flex gap-3 px-4 py-2 text-lg w-full hover:bg-blue-100 transition-all group dark:hover:bg-gray-900 nav-link",
              pathname === item.href && "bg-blue-100 dark:bg-gray-900",
              interNormal.className,
            )}
          >
            <div className="w-12 h-10 flex items-center justify-center">
              {item.icon}
            </div>
            <div className="-mt-1">
              <p
                className={clsx(
                  "text-foreground/70 bg-foreground/70 group-hover:bg-custom-gradient bg-clip-text text-gradient transition-all",
                  pathname === item.href &&
                    "bg-custom-gradient bg-clip-text text-gradient",
                )}
              >
                {item.name}
              </p>
              <p
                className={clsx(
                  "text-foreground/70 bg-foreground/70 text-[10px] leading-3 group-hover:bg-custom-gradient bg-clip-text text-gradient transition-all",
                  pathname === item.href &&
                    "bg-custom-gradient bg-clip-text text-gradient",
                )}
              >
                {item.brief}
              </p>
            </div>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-5 p-4 bg-white dark:bg-[#161616] mx-4 rounded-lg shadow-md border">
        <div className="flex flex-col items-center text-sm space-y-2">
          <Image src="/icons/gift.svg" alt="gift-icon" width={1024} height={1024} className="size-8" />
          <span>Invite your friend and get 10% on all their purchases.</span>
          <Button className="text-transparent bg-gradient-to-r w-fit rounded-md bg-clip-text from-purple-500 to-violet-500 font-bold  bg-white border dark:bg-black px-2 text-xs">
            Invite
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
