import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  isActive?: boolean;
} & ComponentProps<"button">;

export default function Button({ isActive, ...rest }: ButtonProps) {
  const className =
    "bg-slate-900 text-white px-4 py-2 rounded-t-md cursor-pointer hover:bg-cyan-400 hover:text-black transition-colors duration-500";

  return (
    <button
      {...rest}
      className={twMerge(className, isActive ? "bg-cyan-400 text-black" : "")}
    />
  );
}
