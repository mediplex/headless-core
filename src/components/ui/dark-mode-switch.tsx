"use client";

import dynamic from "next/dynamic";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";
import { LoaderCircle, Moon, Sun } from "lucide-react";

const Switch = dynamic(
  () => import("@headlessui/react").then((mod) => mod.Switch),
  {
    ssr: false,
    loading: () => (
      <div className="bg-primary-500 inline-flex h-6 w-11 items-center justify-center rounded-full">
        <LoaderCircle className="text-primary-200 size-4 animate-spin rounded-full" />
      </div>
    ),
  },
);

const DarkModeSwitch = () => {
  const { setTheme, theme, resolvedTheme, themes } = useTheme();
  console.log("themes", themes);

  const handleChange = (isChecked: boolean) => {
    console.log("hadleChane: isChecked", isChecked);
    setTheme(isChecked ? "dark" : "light");
  };

  return (
    <Switch
      checked={
        theme === "dark" ||
        (theme === "system" &&
          typeof resolvedTheme !== "undefined" &&
          resolvedTheme === "dark")
      }
      onChange={handleChange}
      className={cn(
        "group inline-flex h-6 w-11 items-center rounded-full border transition",
        "border-primary-600 bg-primary-200 text-primary-300",
        "data-[checked]:border-primary-300 data-[checked]:bg-primary-600 data-[checked]:text-primary-600",
      )}
    >
      <div
        className={cn(
          "relative size-4 translate-x-1 rounded-full shadow-lg transition duration-500 ease-out group-data-[checked]:translate-x-6",
          "bg-primary-600",
          "group-data-[checked]:bg-primary-300",
        )}
      >
        <Sun
          className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 opacity-100 group-data-[checked]:opacity-0"
          fill="currentColor"
        />
        <Moon
          className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 opacity-0 group-data-[checked]:opacity-100"
          fill="currentColor"
        />
      </div>
    </Switch>
  );
};

export { DarkModeSwitch };
