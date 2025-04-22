"use client";
import clsx from "clsx";
import { TbBell, TbLogout } from "react-icons/tb";
import { CgProfile, CgSupport } from "react-icons/cg";
import { RiExchangeDollarLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { useMedia } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/button";
import { Menu } from "lucide-react";
import Logo from "@/components/logo";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn, setCookies } from "@/lib/utils";
import { interNormal, rubikNormal } from "@/fonts/font";
import ThemeButton from "@/components/theme-button";
import useNavLinks from "./nav-links";
import toast from "react-hot-toast";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      // Remove authentication tokens from cookies or localStorage
      setCookies("", ""); // Clear tokens from cookies if stored there
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      // Redirect to login page
      router.push("/sign-in");

      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Error logging out");
      console.error("LOGOUT:", error);
    }
  };

  const userOptions = [
    {
      icon: CgProfile,
      title: "Profile",
      link: "/dashboard/settings",
    },
    {
      icon: RiExchangeDollarLine,
      title: "Subscription",
      link: "/subscription",
    },
    {
      icon: CgSupport,
      title: "Support",
      link: "/support",
    },
    {
      icon: IoSettingsOutline,
      title: "Settings",
      link: "/dashboard/settings",
    },
  ];
  const isMobile = useMedia("(max-width: 1024px)", false);
  const navlinks = useNavLinks();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.documentElement.addEventListener("click", (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    });
  }, [dropdownOpen, dropdownRef]);

  if (isMobile) {
    return (
      <header className="sticky top-0 first-line:flex items-center bg-background shadow py-4 px-8 border">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button className="bg-transparent border rounded-md px-[14px] py-1">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="overflow-auto">
            <div className="flex flex-col py-6">
              <Logo />
              <nav className="flex flex-col items-start mt-12 w-full">
                {navlinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "flex gap-3 px-4 py-2 text-lg w-full hover:bg-blue-100 transition-all group dark:hover:bg-gray-900 nav-link rounded-md",
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
            </div>
          </SheetContent>
        </Sheet>
      </header>
    );
  }

  return (
    <header className="flex items-center justify-end sticky inset-x-0 top-0 bg-background shadow py-4 px-8 border z-50">
      <div className="hidden md:flex items-center justify-end gap-7">
        <button
          onClick={() => router.push("/dashboard/video-generator")}
          className={cn(
            "bg-custom-gradient py-1 px-4 text-white rounded-md flex items-center gap-2 hover:opacity-80 transition",
            interNormal.className,
          )}
        >
          <p>Create Video</p>
          <p>|</p>
          <FaAngleDown />
        </button>
        <p
          className={cn(
            "bg-primary rounded-md text-foreground py-1 px-2",
            interNormal.className,
          )}
        >
          💰 <span className="text-gradient bg-custom-gradient">300</span>
        </p>
        <ThemeButton />
        <TbBell className="size-5 cursor-pointer text-foreground/70" />
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={cn(
              "bg-[#F3E1E1] dark:bg-[#cb7878] h-9 w-9 rounded-full flex items-center justify-center cursor-pointer",
              rubikNormal.className,
            )}
          >
            R
          </button>
          <div
            ref={dropdownRef}
            className={clsx(
              "absolute top-12 right-0 w-56 bg-background shadow-lg rounded-md transition-all px-4 py-2",
              dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible",
            )}
          >
            {userOptions.map((option, index) => (
              <Link
                href={option.link}
                key={index}
                className={cn(
                  "flex items-center gap-2 text-base cursor-pointer py-2 hover:bg-primary transition-all rounded px-2",
                  interNormal.className,
                )}
              >
                <option.icon className="size-5 text-foreground/70" />
                <p>{option.title}</p>
              </Link>
            ))}
            <hr className="my-2 border-foreground border" />
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-foreground cursor-pointer py-2 hover:bg-primary transition-all rounded px-2 w-full"
            >
              <TbLogout className="size-5 text-foreground/70" />
              <p>Logout</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
