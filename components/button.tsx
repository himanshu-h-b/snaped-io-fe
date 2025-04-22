import { interLight } from "@/fonts/font";
import clsx from "clsx";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={clsx(
        "bg-custom-gradient text-white font-thin px-4 py-1 rounded-lg text-sm flex items-center hover:opacity-80 transition-all justify-center disabled:opacity-50 disabled:cursor-not-allowed",
        interLight.className,
        props.className,
      )}
    >
      {props.children}
    </button>
  );
});

export { Button };
