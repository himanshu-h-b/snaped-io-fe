import { interNormal } from "@/fonts/font";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={cn(
        "w-full border-t flex flex-col justify-center md:flex-row items-center md:justify-between gap-2 p-4 bg-background",
        interNormal.className,
      )}
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © 2025 Snaped. All rights reserved.
      </p>
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms & Conditions</Link>
      </div>
    </footer>
  );
};

export default Footer;
