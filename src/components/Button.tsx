import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  isActive?: boolean;
} & ComponentProps<"button">;

export default function Button({ isActive, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        "bg-slate-900 text-white px-4 py-2 rounded-t-md cursor-pointer",
        isActive ? "bg-cyan-400 text-black" : ""
      )}
    />
  );
}
