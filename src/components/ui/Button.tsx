import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 disabled:opacity-60 disabled:pointer-events-none rounded-lg";

    const variants = {
      primary:
        "bg-blue-700 hover:bg-blue-800 text-white shadow-sm hover:shadow active:scale-[0.99]",
      secondary:
        "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200/80 active:scale-[0.99]",
      outline:
        "bg-transparent hover:bg-blue-50/50 text-blue-700 border border-blue-600/30 hover:border-blue-600/60 active:scale-[0.99]",
      ghost:
        "bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900",
      dark:
        "bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow active:scale-[0.99]",
    };

    const sizes = {
      sm: "h-9 px-3.5 text-xs gap-1.5",
      md: "h-11 px-5 text-sm gap-2",
      lg: "h-12 px-7 text-base gap-2.5 font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
