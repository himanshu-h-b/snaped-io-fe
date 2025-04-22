"use client";

import { TbSun, TbMoon } from "react-icons/tb";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="size-5 cursor-pointer text-foreground/70"
      aria-label="Toggle Theme"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "dark" ? (
        <TbSun className="size-[18px]" />
      ) : (
        <TbMoon className="size-[18px]" />
      )}
    </button>
  );
};

export default ThemeButton;
